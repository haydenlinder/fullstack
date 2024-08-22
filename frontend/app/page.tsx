"use client";

import { ModalTypes, useModalStore } from "@/state/store";
import { useAuth } from "@clerk/nextjs";
import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import Image from "next/image";

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
      {/* <Image src={'/background.webp'} alt="background" width={3000} height={3000}/> */}
      <section className="flex flex-col justify-center items-center text-center p-28">
        <div className=" h-screen w-screen absolute -z-10 inset-0 bg-gradient-to-br from-transparent from-60% via-blue-900 to-[#90caf9]"></div>
        <div className=" h-screen w-screen absolute -z-10 inset-0 bg-gradient-to-bl from-transparent from-70% via-orange-900 to-[#90caf9]"></div>

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

const Backround = () => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient1" gradientTransform="rotate(45)">
          <stop offset="0%" stop-color="#6a11cb" />
          <stop offset="100%" stop-color="#2575fc" />
        </linearGradient>
        <linearGradient id="gradient2" gradientTransform="rotate(45)">
          <stop offset="0%" stop-color="#FF512F" />
          <stop offset="100%" stop-color="#F09819" />
        </linearGradient>
        <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="rgba(255, 255, 255, 0)" />
        </radialGradient>
      </defs>

      <path
        d="M0 400 Q250 300 500 400 T1000 400 T1500 400 L1500 800 L0 800 Z"
        fill="url(#gradient1)"
        opacity="0.8"
      />

      <circle
        cx="400"
        cy="300"
        r="150"
        fill="url(#circleGradient)"
        opacity="0.4"
      />
      <circle
        cx="900"
        cy="500"
        r="200"
        fill="url(#circleGradient)"
        opacity="0.3"
      />
      <circle
        cx="1400"
        cy="350"
        r="100"
        fill="url(#circleGradient)"
        opacity="0.5"
      />

      <path
        d="M0 350 Q350 200 700 350 T1400 350 T2100 350 L2100 1000 L0 1000 Z"
        fill="url(#gradient2)"
        opacity="0.7"
      />

      <ellipse
        cx="1200"
        cy="450"
        rx="300"
        ry="100"
        fill="url(#gradient1)"
        opacity="0.5"
      />
      <path
        d="M0 450 Q200 350 400 450 T800 450 T1200 450 L1200 700 L0 700 Z"
        fill="url(#gradient2)"
        opacity="0.6"
      />
    </svg>
  );
};
