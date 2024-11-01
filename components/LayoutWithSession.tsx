"use client";

import { useSession } from "next-auth/react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function LayoutWithSession({ children }: Props) {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
