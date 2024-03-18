"use client";

import { Posts } from "@/src/components/Posts";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen pt-10">
      <SignedOut>
        <div>Welcome</div>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton />
        <Posts />
      </SignedIn>
    </div>
  );
}
