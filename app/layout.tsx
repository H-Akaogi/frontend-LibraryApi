import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import FrontMenuLayout from "./layout/frontmenu";
import { CommonSonner } from "@/components/common/CommonSonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "図書管理システム",
  description: "Library API frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={geist.variable}>
      <body>
        <FrontMenuLayout>
          {children}
        </FrontMenuLayout>
        <CommonSonner />
      </body>
    </html>
  );
}