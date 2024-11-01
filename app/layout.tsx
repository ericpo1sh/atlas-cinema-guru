import "@/app/global.css";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import LayoutWithSession from "@/components/LayoutWithSession";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="h-full">
        <SessionProvider>
          <LayoutWithSession>{children}</LayoutWithSession>
        </SessionProvider>
      </body>
    </html>
  );
}
