"use client";
import { ClerkProvider, SignIn, useAuth } from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import "./globals.css";
import { ApolloWrapper } from "@/src/client";
import AnchorTemporaryDrawer, {
  Header,
  drawerWidth,
} from "@/components/LeftDrawer";
import { Modal, Paper } from "@mui/material";
import { useModalStore } from "@/state/store";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {} = useModalStore();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`flex justify-center`}>
          <div className="container">
            <ApolloWrapper>
              <AppRouterCacheProvider options={{}}>
                <ThemeProvider theme={theme}>
                  <Header />
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
