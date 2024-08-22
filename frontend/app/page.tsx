"use client";

import { ModalTypes, useModalStore } from "@/state/store";
import { useAuth } from "@clerk/nextjs";
import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const router = useRouter();
  const { update } = useModalStore();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) router.replace("/posts");
  }, [userId]);

  const handleClick = () => {
    if (!userId) return update(ModalTypes.LOGIN);
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center text-center font-bold">
        <div className="mb-10">
          <Typography variant="h2">The best platform for</Typography>
          <Typography variant="h2">for matching</Typography>
          <Typography variant="h2">talent with jobs.</Typography>
        </div>
        <div className="flex justify-between w-72">
          <Button variant="contained" onClick={handleClick}>
            <div className="px-5">Sign in</div>
          </Button>
          <Button
            variant="contained"
            classes={{}}
            onClick={() => router.push("/posts")}
          >
            Browse Jobs
          </Button>
        </div>
      </section>
    </>
  );
}
