import { ClerkProvider } from "@clerk/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import "./globals.css";
import { ApolloWrapper } from "@/src/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex flex-col items-center">
          <ApolloWrapper>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </AppRouterCacheProvider>
          </ApolloWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
