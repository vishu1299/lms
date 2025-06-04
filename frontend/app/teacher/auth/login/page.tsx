"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Image from "next/image"
import { FaGoogle } from "react-icons/fa6"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"

interface User {
  src: string
  alt: string
}

const users: User[] = [
  { src: "", alt: "User 1" },
  { src: "/teacher/login/Ellipse18.png", alt: "User 2" },
  { src: "", alt: "User 3" },
  { src: "/teacher/login/Ellipse20.png", alt: "User 4" },
]

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(true)

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/teacher/dashboard")
  }

  return (
    <div className="flex p-4">
      <div className="w-[50%]">

      </div>
      <div className="space-y-7 w-[50%] px-4">
        <div className="flex justify-end">
          <Link href="/teacher/auth/signup">
            <Button size="sm" className="text-white bg-blue-600 px-8 ">Register</Button>
          </Link>
        </div>
        <div className="space-y-4 pl-6 text-gray-910">
          <h1 className="text-3xl font-thin ">
            Hi, <span className="font-bold">Welcome Back</span>
          </h1>
          <h2 className="text-3xl font-thin">
            Ready to <span className="text-blue-600 font-semibold">Teach</span> Today?
          </h2>
        </div>

        <div className="flex space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6 border-r border-gray-910/10 py-3 flex-[2] px-6">
            <div className="space-y-2">
              < Label htmlFor="email" className="text-sm font-normal text-gray-910">
                Your email or phone number
              </ Label>
              <Input id="email" type="email" placeholder="youremail@guru.com" className="h-12 px-4 bg-gray-40 placeholder:text-transparent-30" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-gray-910 justify-between text-sm font-medium">
                < Label htmlFor="password" className="text-sm font-normal text-gray-910">
                  Password
                </ Label>
                <Link href="/teacher/auth/login/forgot-password">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-12 px-4 bg-gray-40 pr-10 placeholder:text-transparent-30"
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-910/50"
                >
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Login
            </Button>
          </form>

          <div className="space-y-7 px-6 flex-[1] text-gray-910">
            <div className="space-y-3 w-30">
              <p className="bg-white text-sm">Or continue with</p>
              <Button type="button" variant="outline" className="w-full  py-7 border-none bg-gray-40 rounded-xl">
                <FaGoogle className="h-5 w-5 mr-2" />
              </Button>
            </div>
            <div>
              <p className="font-medium mb-1">
                Don't have an<br />account?
              </p>
              <p className="text-gray-910/50">
                Join 10,000+ other
                <br />
                teachers <Link href="/teacher/auth/signup" className="font-medium underline text-gray-910">
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center px-6 mb-4">
          {users.map((user, index) => (
            user.src ? (
              <Image
                key={index}
                src={user.src}
                alt={user.alt}
                width={80}
                height={80}
                className={`rounded-full object-cover border-2 border-white ${index !== 0 ? "-ml-8" : ""}`}
              />
            ) : (
              <div
                key={index}
                className={`w-[80px] h-[80px] rounded-full bg-gray-40 border-2 border-white ${index !== 0 ? "-ml-8" : ""}`}
              />
            )
          ))}
        </div>

      </div>
    </div>
  )
}
