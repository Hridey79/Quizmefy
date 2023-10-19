import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WordCloud from "../WordCloud";
import { prisma } from "@/lib/db";

type Props = {};

const HotTopicsCard = async (props: Props) => {
const data=[
    {
        text:"hey",
        value:3,
    },
    {
        text:"jey",
        value:4,
    },
    {
        text:"pey",
        value:10,
    },
    {
        text:"hie",
        value:1,
    },
]
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud formattedTopics={data} />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;