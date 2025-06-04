"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lightbulb, EyeOffIcon, EyeIcon } from "lucide-react"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function page() {
    const [showPassword, setShowPassword] = useState(true)

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push("/teacher/auth/login/pass-reset-success")
    }

    return (
        <div className="flex p-4">
            <div className="w-[50%]">
            </div>
            <div className="space-y-7 w-[50%] px-4">
                <div className="flex justify-end">
                    <Link href="/teacher/auth/signup">
                        <Button size="sm" className="text-white bg-blue-600 px-8">Register</Button>
                    </Link>
                </div>
                <div className="space-y-4 pl-6 text-gray-910">
                    <h1 className="text-3xl font-thin">
                        Set <span className="font-bold">New Password</span>
                    </h1>
                    <p className="text-sm">Please set new password to keep your account
                    </p>
                </div>
                <div className="flex">
                    <form onSubmit={handleSubmit} className="space-y-6 border-r border-gray-910/10 py-3 flex-[2] px-6">
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-normal text-gray-910">
                                New Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="h-12 px-4 bg-gray-40 placeholder:text-transparent-30 pr-10"
                                />
                                <Button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-910/50 shadow-none"
                                >
                                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-normal text-gray-910">
                                Re-type Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Re-Enter your password"
                                    className="h-12 px-4 bg-gray-40 placeholder:text-transparent-30 pr-10"
                                />
                                <Button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-910/50 shadow-none"
                                >
                                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                                </Button>
                            </div>
                        </div>
                        <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">
                            Reset Password
                        </Button>
                    </form>
                    <div className="space-y-3 px-6 flex-[1] pt-3 text-gray-910">
                        <div className="space-y-2">
                            <Lightbulb strokeWidth={2.5} />
                            <p className="font-medium bg-white">Password Tips!</p>
                        </div>
                        <div>
                            <p className="text-sm mb-1">
                                Amet minim mollit non <br />
                                deserunt ullamco est sit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
