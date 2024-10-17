import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Pixel Art Editor",
  description: "A pixel art editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>  
        {children}
      </body>
    </html>
  );
}
