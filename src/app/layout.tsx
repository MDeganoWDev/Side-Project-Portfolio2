import "../style/globals.css";

import React from "react";
import { Inter } from "next/font/google";

import Navbar from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matteo Degano",
  description: "Welcome to my personnal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
