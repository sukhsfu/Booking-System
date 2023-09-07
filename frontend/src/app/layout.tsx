import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Container from "@/components/commons/Container";

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
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
