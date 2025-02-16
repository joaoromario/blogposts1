import React from "react";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/app/db";
import paths from "@/paths";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShowPath(topic.slug)}>
          <Chip
            color="warning"
            variant="shadow"
            className="flex flex-wrap text-xs sm:text-base"
          >
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
