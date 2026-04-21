import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PausePad | Final Proposal and Video",
  description:
    "PausePad is a gentle physical and mobile system that helps students interrupt late-night scrolling and transition into rest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
