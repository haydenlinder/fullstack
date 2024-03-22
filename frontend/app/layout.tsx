"use client";
import { ClerkProvider, SignIn, useAuth } from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import "./globals.css";
import { ApolloWrapper } from "@/src/client";
import AnchorTemporaryDrawer, { drawerWidth } from "@/components/LeftDrawer";
import { Modal, Paper } from "@mui/material";
import { useModalStore } from "@/state/store";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`sm:m-16 mt-16 sm:ml-[300px] p-10 flex justify-center`}
        >
          <div className="container">
            <ApolloWrapper>
              <AppRouterCacheProvider options={{}}>
                <ThemeProvider theme={theme}>
                  <Layout />
                  {children}
                </ThemeProvider>
              </AppRouterCacheProvider>
            </ApolloWrapper>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

const Layout = () => {
  const { isOpen, update } = useModalStore();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) update(false);
  }, [userId]);

  return (
    <>
      <AnchorTemporaryDrawer />
      <Modal
        open={isOpen}
        onClose={() => update(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper className="absolute inset-0 m-auto w-fit h-fit p-2">
          <SignIn />
        </Paper>
      </Modal>
    </>
  );
};
