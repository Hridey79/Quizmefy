"use client";
import { quizCreationSchema } from "@/schemas/forms/quiz";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {}
type Input = z.infer<typeof quizCreationSchema>;

const QuizCreation = (props: Props) => {
    const form = useForm<Input>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
          topic: "",
          type: "mcq",
          amount: 3,
        },
      });

      const onSubmit = async (data: Input) => {
       alert(JSON.stringify(data,null,2));
      };
    form.watch()

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/4 top-1/3 left-1/2">
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Quiz Creation</CardTitle>
        <CardDescription>Choose a topic</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a topic" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please provide any topic you would like to be quizzed on
                    here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Questions</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="How many questions?"
                      type="number"
                      {...field}
                      onChange={(e) => {
                        form.setValue("amount", parseInt(e.target.value));
                      }}
                      min={1}
                      max={10}
                    />
                  </FormControl>
                  <FormDescription>
                    You can choose how many questions you would like to be
                    quizzed on here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button
                variant={
                  form.getValues("type") === "mcq" ? "default" : "secondary"
                }
                className="w-1/2 rounded-none rounded-l-lg"
                onClick={() => {
                  form.setValue("type", "mcq");
                }}
                type="button"
              >
                <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
              </Button>
              <Separator orientation="vertical" />
              <Button
                variant={
                  form.getValues("type") === "open_ended"
                    ? "default"
                    : "secondary"
                }
                className="w-1/2 rounded-none rounded-r-lg"
                onClick={() => form.setValue("type", "open_ended")}
                type="button"
              >
                <BookOpen className="w-4 h-4 mr-2" /> Open Ended
              </Button>
            </div>
            <Button  type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  </div>
  )
}

export default QuizCreation