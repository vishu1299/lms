"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Login from "./components/login";
import RegisterForm from "../signup/signup";
import ForgotPasswordPage from "./components/forgot-password";
import VerifyOTPPage from "./components/verify-otp";
import SetPasswordPage from "./components/set-password";
import SuccessPage from "./components/success-page";

type navLink = {
  name: string;
  path: string;
};

const navlinks: navLink[] = [
  { name: "Home", path: "/student/home" },
  { name: "Library", path: "/student/library" },
  { name: "Forum", path: "/student/forum" },
  { name: "Request Meeting", path: "/student/meeting" },
  { name: "Courses", path: "/student/courses" },
];

const page = () => {
  const [view, setView] = useState("login");
  return (
    <div>
      <header className="w-full">
        <div className="h-full flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/student/home" className="flex items-center">
            <Image
              src="/xcrino.png"
              alt="Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>

          <nav className="flex gap-6 text-sm text-black-10 font-medium">
            {navlinks.map((link, index) => (
              <Link key={index} href={link.path} className="">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-sand-150" />
            <div className="w-8 h-8 rounded-full bg-sand-350" />
          </div>
        </div>
      </header>
      <div className="w-full">
        <Image
          src="/authbg.png"
          alt="beforelogin"
          width={1200}
          height={400}
          className=""
        />
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md w-full flex items-center justify-center -mt-50">
        {view === "login" && (
          <Login
            onSwitch={() => setView("signup")}
            onForgot={() => setView("forgot")}
          />
        )}
        {view === "signup" && (
          <RegisterForm onSwitch={() => setView("login")} />
        )}
        {/* {view === 'forgot' && <ForgotPasswordPage onBack={() => setView('login')} />} */}
      </div>
    </div>
  );
};

export default page;
