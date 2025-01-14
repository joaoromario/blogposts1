import PostList from "@/components/posts/postList";
import TopicCreateForm from "@/components/topics/topicCreateForm";
import TopicList from "@/components/topics/topicList";
import { Divider } from "@nextui-org/react";
import { fetchTopPosts } from "./db/queries/posts";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2 sm:col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>

      <div className="border shadow py-3 px-2 flex flex-col col-span-2 sm:col-span-1 items-center">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg mb-3">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
