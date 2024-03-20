"use client";

import { PostForm } from "@/components/PostForm";
import { Posts } from "@/components/Posts";
import { SignedIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-full">
      <SignedIn>
        <PostForm />
      </SignedIn>
      <Posts />
    </div>
  );
}
