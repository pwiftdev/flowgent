import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FLOWGENT | AI Chatbot Automation Agency",
  description: "Transforming businesses with sophisticated AI chatbot solutions. Expert chatbot development and automation services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
