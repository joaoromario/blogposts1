import CommentCreateForm from "@/components/comments/commentCreateForm";
import { Suspense } from "react";
import CommentList from "@/components/comments/commentList";
import PostShow from "@/components/posts/postShow";
import paths from "@/paths";
import Link from "next/link";
import React from "react";
import PostShowLoading from "@/components/posts/postShowLoading";

interface PostShowPageProps {
  params: Promise<{
    slug: string;
    postId: string;
  }>;
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = await params;

  return (
    <div className="space-y-3">
      <Link href={paths.topicShowPath(slug)}>
        {"<"}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
