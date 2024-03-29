"use client";

import { PostForm } from "@/components/PostForm";
import { Posts } from "@/components/Posts";
import { ModalTypes, useModalStore } from "@/state/store";
import { SignIn, SignedIn, useAuth } from "@clerk/nextjs";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal, Paper } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { update } = useModalStore();
  const { userId } = useAuth();

  const handleClick = () => {
    if (!userId) return update(ModalTypes.LOGIN);
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Button variant="contained" onClick={handleClick}>
        <AddIcon />
      </Button>
      <SignedIn>{isFormOpen && <PostForm />}</SignedIn>
      <Posts />
    </div>
  );
}
