import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import ClientLayout from "./client";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Vaibhav Kanpariya | Full Stack Developer",
  description:
    "Portfolio of Vaibhav Kanpariya, a Full Stack Developer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
  keywords: [
    "Vaibhav Kanpariya",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
  ],
  authors: [{ name: "Vaibhav Kanpariya" }],
  creator: "Vaibhav Kanpariya",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nihalmaskey.com",
    title: "Vaibhav Kanpariya | Full Stack Developer",
    description:
      "Portfolio of Vaibhav Kanpariya, a Full Stack Developer specializing in JavaScript, TypeScript, React.js, Node.js, and AWS.",
    siteName: "Vaibhav Kanpariya Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Vaibhav Kanpariya Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Kanpariya | Full Stack Developer",
    description:
      "Portfolio of Vaibhav Kanpariya, a Full Stack Developer specializing in JavaScript, TypeScript, React.js, Node.js, and AWS.",
    creator: "@Vaibhav3497337",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  );
}

import "./globals.css";
