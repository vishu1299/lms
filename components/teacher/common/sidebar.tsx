"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, CalendarDays, MessageSquareMore, BookText, ChartSpline, Star, User } from "lucide-react";

const teacherLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard},
  { name: "My Schedule", href: "/my-schedule", icon: CalendarDays },
  { name: "Messages", href: "/message", icon: MessageSquareMore },
  { name: "My Course", href: "/my-course", icon: BookText },
  { name: "My Status", href: "/my-status", icon: ChartSpline },
  { name: "Reviews", href: "/reviews", icon: Star },
  { name: "My Accounts", href: "/my-accounts", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white shadow-md border-r flex flex-col items-center">
      <div className="p-6 font-bold text-xl text-blue-600">
        Xcrino
      </div>

      <div className="flex flex-col p-4 space-y-5">
        {teacherLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center justify-start space-x-5 px-4 py-2 rounded-md text-neutral-700 hover:bg-blue-50 hover:text-blue-600",
              pathname === link.href && "bg-emerald-400 text-white font-semibold"
            )}
          >
            <Icon />
           <span> {link.name}</span>
          </Link>
          )
        })}
      </div>
    </div>
  );
}
