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
        <body className={`mt-16 m-10 sm:ml-[240px] p-10`}>
          <div className="container">
            <ApolloWrapper>
              <AppRouterCacheProvider options={{}}>
                <ThemeProvider theme={theme}>
                  <AnchorTemporaryDrawer />
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
