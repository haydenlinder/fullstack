"use client";

import { PostForm } from "@/components/PostForm";
import { Posts } from "@/components/Posts";
import { ModalTypes, useModalStore } from "@/state/store";
import { SignIn, SignInButton, SignedIn, useAuth } from "@clerk/nextjs";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { update } = useModalStore();
  const { userId } = useAuth();

  return (
    <div className="w-full flex flex-col items-center">
      <Paper className="w-full flex flex-col items-center mb-20 mt-10 text-center">
        <Typography variant="h1">Do stuff</Typography>
        <Typography variant="h1">But cooler</Typography>
      </Paper>

      <Link href={"/app"}>
        <Button variant="contained">Get Started</Button>
      </Link>
    </div>
  );
}
