"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import "./globals.css";
import { ApolloWrapper } from "@/src/client";
import { Header } from "@/components/LeftDrawer";
import { dark } from "@clerk/themes";
import AnchorTemporaryDrawer, { SideBar } from "@/components/LeftDrawer";
import { useModalStore } from "@/state/store";
import { SignIn } from "@clerk/clerk-react";
import { useAuth } from "@clerk/nextjs";
import { Modal, Paper } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={"flex justify-center mt-28"}>
          <div className="container">
            <ApolloWrapper>
              <AppRouterCacheProvider options={{}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <ThemeProvider theme={theme}>
                    <Header />
                    <App>{children}</App>
                  </ThemeProvider>
                </LocalizationProvider>
              </AppRouterCacheProvider>
            </ApolloWrapper>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

function App({ children }: { children: ReactNode }) {
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
          <SignIn afterSignInUrl={"/"} afterSignUpUrl={"/"} />
        </Paper>
      </Modal>
      <div className={"sm:mx-16 sm:ml-[300px] flex justify-center"}>
        <div className="container pb-96">{children}</div>
      </div>
    </>
  );
}
