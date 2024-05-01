"use client";

import { PostForm } from "@/components/PostForm";
import { Posts } from "@/components/Posts";
import { ModalTypes, useModalStore } from "@/state/store";
import { SignIn, SignInButton, SignedIn, useAuth } from "@clerk/nextjs";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { update } = useModalStore();
  const { userId } = useAuth();

  return (
    <div className="w-full flex flex-col items-center">
      <Paper className="w-full flex flex-col items-center mb-20 mt-10 text-center">
        <Typography variant="h1">The place where jobs meet talent</Typography>
      </Paper>
      <div className="px-10 py-7 bg-gray-800 rounded flex m-10">
        <div className="flex flex-col items-center">
          <Typography variant="h6">Erica Chen</Typography>
          <Typography variant="subtitle1">Software Engineer</Typography>
          <div className="border rounded-full h-36 w-36 overflow-hidden">
            <Image
              alt="profile image"
              src="/profile.webp"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>

      <Link href={"/app"}>
        <Button variant="contained">Get Started</Button>
      </Link>
    </div>
  );
}
