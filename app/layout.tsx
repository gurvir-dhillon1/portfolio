import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gurvir Dhillon Portfolio",
  description: "Gurvir Dhillon's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex w-full min-h-screen dark">
      <body
        className={`flex flex-col justify-center ${geistSans.variable} ${geistMono.variable} antialiased bg-background h-full w-full
                    transition-colors duration-300`}
      >
        <div className="flex-col hidden md:flex items-start w-fit h-fit p-5 text-shadow text-lg text-primary fixed top-0 left-0">
          <div>Gurvir Dhillon</div>
          <div className="text-sm">Software Engineer @ BW Design Group</div>
          <div className="text-sm">Sacramento, CA</div>
        </div>
        <div className="fixed top-0 right-0 p-5">
          <ThemeToggle />
        </div>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
