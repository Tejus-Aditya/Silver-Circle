"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Stethoscope, Users, User } from "lucide-react";

const NAV_ITEMS = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/care", label: "Find Care", icon: Stethoscope },
  { href: "/community", label: "Community", icon: Users },
  { href: "/profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile bottom nav */}
      <nav
        aria-label="Primary"
        className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-stone-200 md:hidden"
      >
        <ul className="grid grid-cols-4">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex flex-col items-center justify-center gap-1 py-3 min-h-[64px] ${
                    active ? "text-teal-800" : "text-stone-500"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon size={24} strokeWidth={active ? 2.5 : 2} />
                  <span className="text-xs font-medium">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop sidebar */}
      <nav
        aria-label="Primary"
        className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:w-56 md:bg-white md:border-r md:border-stone-200 md:pt-8 md:z-40"
      >
        <div className="px-6 mb-8">
          <span className="text-xl font-extrabold text-teal-900">SilverCircle</span>
        </div>
        <ul className="flex flex-col gap-1 px-3">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium ${
                    active
                      ? "bg-teal-800 text-white"
                      : "text-stone-700 hover:bg-stone-100"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon size={22} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
