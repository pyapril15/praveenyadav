import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";

import { ThemeProvider } from "../components/theme-provider";
import { fontMono, fontSans } from "../styles/fonts";
import { home, baseURL } from "@/resources";

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: home.title,
  description: home.description,
  openGraph: home.openGraph,
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // The theme provider updates the root attribute before React hydrates.
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
