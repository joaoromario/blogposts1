import type { Comment } from "@prisma/client";
import { cache } from "react";
import { db } from "@/app/db";

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

//memoazing
export const fetchCommentsByPostId = cache(
  (postId: string): Promise<CommentWithAuthor[]> => {
    return db.comment.findMany({
      where: { postId },
      include: { user: { select: { name: true, image: true } } },
    });
  }
);
