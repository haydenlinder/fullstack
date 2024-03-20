"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import "./globals.css";
import { ApolloWrapper } from "@/src/client";
import AnchorTemporaryDrawer, { drawerWidth } from "@/components/LeftDrawer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`flex flex-col items-center mt-10 ml-[190px] container`}
        >
          <ApolloWrapper>
            <AppRouterCacheProvider options={{}}>
              <ThemeProvider theme={theme}>
                <AnchorTemporaryDrawer />
                {children}
              </ThemeProvider>
            </AppRouterCacheProvider>
          </ApolloWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
