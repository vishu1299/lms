"use client"
import { useState } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"

type ForgotPasswordProps = {
    switchToOTP: () => void
}


export default function ForgotPasswordPage({ switchToOTP }: ForgotPasswordProps) {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send a request to your backend
        // to send a password reset email or OTP
        console.log("Sending reset link to:", email)

        // Navigate to OTP verification page
        switchToOTP()
    }


    return (
        <div className="flex items-center justify-center p-2">
            <div className="w-full max-w-md rounded-md bg-white p-6 relative">

                <h1 className="text-center text-2xl font-semibold mb-2">Forgot password?</h1>

                <p className="text-xs text-center text-gray-600 mb-6 whitespace-nowrap">
                    Please enter the email address where you'd like to receive the OTP.
                </p>

                <form onSubmit={handleSubmit} className="">
                     
                    <div className="relative">
                        <Label htmlFor="email">Email address</Label>
                        <div className="relative flex items-center">
                        <Input
                            id="email"
                            placeholder="Examplemail.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 pr-10 font-medium placeholder:text-black border-blue-600 text-sm"
                            required
                        /> 
                        <Mail className="absolute right-2 mt-1" color="#AAAAAA" size={15} />
                    </div>
                    </div>

                    <p className="font-medium text-xs mt-2 mb-4">
                        We will send you an OTP to reset new <span className="text-blue-600">password</span>
                    </p>

                    <Button type="submit" className="w-full bg-blue-600 text-white">
                        Continue
                    </Button>
                </form>
            </div>
        </div>
    )
}
