import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "React in patterns",
  description: "React in patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
