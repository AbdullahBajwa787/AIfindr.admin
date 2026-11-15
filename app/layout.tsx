import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Logo } from "@/components/logo";
import { ArrowUpRight, ShieldCheck, Activity } from "lucide-react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050704",
};

export const metadata: Metadata = {
  title: "AIFindr Admin Console — Traffic Analytics & Tool CMS",
  description: "Official Admin Dashboard for AIFindr",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="bg-[#050704] text-[#f2f7ef] min-h-screen flex flex-col selection:bg-[#a3ff12] selection:text-[#050704]">
        <header className="site-header sticky top-0 z-40 border-b border-[#1b2b16] bg-[#070b05]/90 backdrop-blur-xl">
          <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-5 md:px-8">
            <div className="flex items-center gap-3">
              <Logo size="sm" showText={true} />
              <span className="hidden sm:inline-block rounded-md border border-[#a3ff12]/40 bg-[#a3ff12]/15 px-2 py-0.5 text-[10px] font-mono font-bold text-[#a3ff12]">
                ADMIN CONSOLE
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://aifindr-ten.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glossy-secondary text-xs py-2 px-3.5 flex items-center gap-1.5"
              >
                <span>Live Public Site</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#162412] bg-[#050804] py-8 text-center text-xs text-[#70826c]">
          <p>© 2026 AIFindr Admin Control System. Authorized access only.</p>
        </footer>
      </body>
    </html>
  );
}
