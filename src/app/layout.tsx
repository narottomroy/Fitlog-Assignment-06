import Navbar from "@/components/layout/Navbar";
import WorkoutProvider from "@/context/WorkContext";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import FooterPage from "@/components/home/Footer";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Track your workouts and build your daily fitness plan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <WorkoutProvider>
          <Navbar />

          {children}

          <FooterPage></FooterPage>
          <ToastContainer position="top-right" autoClose={2500} theme="dark" />
        </WorkoutProvider>
      </body>
    </html>
  );
}
