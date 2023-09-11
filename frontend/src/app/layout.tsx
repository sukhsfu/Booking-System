import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Container from "@/components/commons/Container";
import { ReduxProvider } from "@/redux/redux-provider";

const nunito = Nunito({ subsets: ["latin"] });

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
      <body className={nunito.className}>
        <Container>
          <ReduxProvider>
            <Navbar />
            {children}
          </ReduxProvider>
        </Container>
      </body>
    </html>
  );
}
