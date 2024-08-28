"use client";

import { Header } from "@/components/LeftDrawer";
import AnchorTemporaryDrawer from "@/components/LeftDrawer";
import { useModalStore } from "@/state/store";
import { useAuth } from "@clerk/nextjs";
import { ReactNode, useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { openModal, update } = useModalStore();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) update(null);
  }, [userId]);

  return (
    <>
      <Header />

      <AnchorTemporaryDrawer />

      <div className={"sm:mx-16 sm:ml-[300px] flex justify-center mt-28"}>
        <div className="container pb-96">{children}</div>
      </div>
    </>
  );
}
