"use client";
import AnchorTemporaryDrawer, {
  SideBar,
  drawerWidth,
} from "@/components/LeftDrawer";
import { useModalStore } from "@/state/store";
import { SignIn } from "@clerk/clerk-react";
import { useAuth } from "@clerk/nextjs";
import { Modal, Paper } from "@mui/material";
import { ReactNode, useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { openModal, update } = useModalStore();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) update(null);
  }, [userId]);

  return (
    <>
      <AnchorTemporaryDrawer />
      <Modal
        open={openModal === "LOGIN"}
        onClose={() => update(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            ml: { sm: `calc(50% - ${120}px)` },
          }}
          className="absolute inset-0 m-auto w-fit h-fit p-2 "
        >
          <SignIn />
        </Paper>
      </Modal>
      <SideBar />
      <div className={`sm:m-16 mt-16 sm:ml-[300px] p-10 flex justify-center`}>
        <div className="container">{children}</div>
      </div>
    </>
  );
}
