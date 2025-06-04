"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Lightbulb, Play } from "lucide-react"
import { useRouter } from "next/navigation"

export default function page() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("going")
     router.push("/teacher/auth/login/reset-password")
  }

  return (
    <div className="flex p-4">
      <div className="w-[50%]">
      </div>
      <div className="space-y-7 w-[50%] px-4">
      <div className="flex justify-end">
          <Link href="/teacher/auth/signup">
            <Button  size="sm" className="text-white bg-blue-600 px-8">Register</Button>
          </Link>
        </div>
        <div className="space-y-4 pl-6 text-gray-910">
          <h1 className="text-3xl font-thin">
            <span className="font-bold">Forgot</span> your Password
          </h1>
          <p className="text-sm">We will send you an email to reset your password</p>
        </div>
        <div className="flex">
          <div className="space-y-8 flex-[2]">
            <form onSubmit={handleSubmit} className="space-y-6 border-r border-gray-910/40 py-3 px-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-normal text-gray-910">
                  Your email or phone number
                </Label>
                <Input id="email" type="email" placeholder="Enter your email" className="h-12 px-4 bg-gray-40 placeholder:text-transparent-30" />
              </div>
              <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Reset Password
              </Button>
              <p className="text-gray-910 text-sm font-medium">
                Suddenly remembered? {" "}
                <Link href="/teacher/auth/login" className="font-medium text-blue-600 underline">
                  Login Now
                </Link>
              </p>
            </form>
            <div className="flex justify-center">
              <div className="bg-emerald-500 h-25 rounded-xl mx-6 w-full flex items-center justify-center space-x-3">
                <p className="text-white font-semibold text-sm">
                  Watch How to Change a <br/>
                  Forgotten Password
                </p>
                <div className="w-9 bg-gray-910 h-9 rounded-full flex items-center justify-center">
                  <Play fill="white" className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 px-6 flex-[1] pt-3 text-gray-910">
            <div className="space-y-2">
              <Lightbulb strokeWidth={2.5} />
              <p className="font-medium bg-white">Password Tips!</p>
            </div>
            <div>
              <p className="mb-1 text-sm">
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
