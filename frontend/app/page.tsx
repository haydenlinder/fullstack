"use client";

import { PostForm } from "@/components/PostForm";
import { Posts } from "@/components/Posts";
import { SignedIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen pt-10">
      <SignedIn>
        <PostForm />
      </SignedIn>
      <Posts />
    </div>
  );
}
