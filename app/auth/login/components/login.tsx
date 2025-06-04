"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon, Facebook, Lock, Mail, Twitter } from "lucide-react"

type LoginProps = {
    onSwitch: () => void
    onForgot: () => void
}

export default function LoginForm({ onSwitch, onForgot }: LoginProps) {
    const [email, setEmail] = useState("soeraji@circle.com")
    const [password, setPassword] = useState("••••••••••")
    const [showPassword, setShowPassword] = useState(false)
    const [emailError, setEmailError] = useState("Wrong ID")

    return (
        <div className="w-full max-w-md bg-white shadow rounded-2xl p-8">
            <div className="text-center space-y-3 pb-0">
                <p className="text-lg text-slate-350 tracking-wide">JUST LOGIN FIRST</p>
                <h1 className="text-2xl font-semibold">Welcome to Mandean <br /> Knowledge Centre</h1>
            </div>
            <div className="pt-6">
                <form  className="space-y-6">
                    <div className="space-y-1">
                        <div className="relative">
                            <Input
                                type="email"
                                value={email}
                                className="pl-10 shadow-none border-b border-red-450 rounded-none text-slate-650"
                            />
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Mail className="text-sand-150" size={14} />
                            </div>
                            {emailError && (
                                <span className="text-red-450 text-sm absolute right-3 top-1/2 -translate-y-1/2">{emailError}</span>
                            )}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 text-zinc-550 shadow-none border-b border-green-450 rounded-none"
                            />
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Lock className="text-sand-150" size={14} />
                            </div>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon className="h-4 w-4 text-neutral-450" /> : <EyeIcon className="h-4 w-4 text-neutral-450" />}
                            </Button>
                        </div>
                    </div>

                    <Button type="submit"  className="w-full bg-blue-600 text-white">
                        Login
                    </Button>

                    <div className="relative flex items-center justify-center">
                        <div className="border-t border-gray-16 w-full"></div>
                        <span className="bg-white px-3 text-sm text-sand-150 absolute">OR</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <Button className="flex justify-center items-center border border-gray-16 shadow-none rounded-full text-base font-medium">
                            G
                        </Button>
                        <Button className="flex justify-center items-center border border-gray-16 shadow-none rounded-full">
                            <div className="bg-indigo-850 rounded-xs"><Facebook size={10} strokeWidth={0.1} className="fill-white text-white" /></div>
                        </Button>
                        <Button className="flex justify-center items-center border border-gray-16 shadow-none rounded-full">
                            <Twitter className="fill-sky-450 text-sky-450" />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
