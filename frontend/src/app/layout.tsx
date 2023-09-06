import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import ClientOnly from "@/components/commons/ClientOnly";

export const metadata: Metadata = {
  title: "Appointment Booking System",
  description: "Created by Sukhwinder Singh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <Navbar />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
