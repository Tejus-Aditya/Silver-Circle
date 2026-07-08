"use client";

import { useRouter, usePathname } from "next/navigation";
import { Siren } from "lucide-react";

export default function SosFab() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide on the login screen and on the SOS page itself.
  if (pathname === "/" || pathname === "/sos") return null;

  return (
    <button
      onClick={() => router.push("/sos")}
      aria-label="Send SOS emergency alert"
      className="fixed z-50 bottom-24 right-5 md:bottom-8 md:right-8 flex items-center gap-2 rounded-full bg-red-600 text-white px-5 py-4 shadow-lg shadow-red-600/30 hover:bg-red-700 active:bg-red-800 min-h-[64px] min-w-[64px] justify-center"
    >
      <Siren size={28} />
      <span className="font-extrabold text-lg hidden sm:inline">SOS</span>
    </button>
  );
}
