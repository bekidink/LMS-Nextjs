import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {DM_Sans} from "next/font/google"
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
const dmSans=DM_Sans({
  subsets:['latin'],
  display:"swap",
  variable:'--font-dm-sans'
})

export const metadata: Metadata = {
  title: "E-Learning",
  description: "E-learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${dmSans.className} `}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
