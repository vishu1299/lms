"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, CalendarDays, MessageSquareMore, BookText, ChartSpline, Star, User } from "lucide-react";

const teacherLinks = [
  { name: "Dashboard", href: "/teacher/dashboard", icon: LayoutDashboard},
  { name: "My Schedule", href: "/teacher/schedule", icon: CalendarDays },
  { name: "Messages", href: "/teacher/message", icon: MessageSquareMore },
  { name: "My Course", href: "/teacher/my-course", icon: BookText },
  { name: "My Status", href: "/teacher/my-status", icon: ChartSpline },
  { name: "Reviews", href: "/teacher/reviews", icon: Star },
  { name: "My Accounts", href: "/teacher/my-account", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-55 bg-white shadow-md border-r border-gray-200 flex flex-col items-center">
      <div className="p-6 font-bold text-xl text-blue-600">
        Xcrino
      </div>

      <div className="flex flex-col p-4 space-y-10">
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
           <span className="whitespace-nowrap"> {link.name}</span>
          </Link>
          )
        })}
      </div>
    </div>
  );
}
