import { PlayerProvider } from "@/contexts/playerContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SertanejoFy",
  description: "Listen your music sertanejo here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-zinc-50">
        <PlayerProvider>
          <div className="overflow-auto h-[calc(100vh-96px)]">{children}</div>
        </PlayerProvider>
      </body>
    </html>
  );
}
