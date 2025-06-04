"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import { useRouter } from "next/navigation"
 import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type loginback = {
    onClose: () => void
}

export default function VerifyOTPPage({onClose}: loginback) {
  const [otp, setOtp] = useState(["", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(56) // 56 seconds
  const router = useRouter()
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]

  useEffect(() => {
    // Focus the first input when component mounts
    if (inputRefs[0].current) {
      inputRefs[0].current.focus()
    }

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 3 && inputRefs[index + 1].current) {
      inputRefs[index + 1].current?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs[index - 1].current) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    const otpValue = otp.join("")
    console.log("Verifying OTP:", otpValue)

    // Here you would verify the OTP with your backend
    // If successful, redirect to reset password page or dashboard
    onClose()
  }

  const handleResendCode = () => {
    // Reset timer and request new OTP
    setTimeLeft(56)
    console.log("Resending OTP code")
  }

  

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md rounded-md bg-white p-6 relative">
         
        <h1 className="text-center text-2xl font-semibold mb-2">Enter OTP to Verify</h1>
        <p className="text-xs text-gray-600 text-center mb-6">We've sent the code to the email on your device</p>

        <form onSubmit={handleVerify}>
          <div className="flex justify-center gap-4 mb-6">
            {[0, 1, 2, 3].map((index) => (
              <Input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                className="w-12 h-12 text-center text-xl"
                value={otp[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>

          <div className="text-center text-xs text-gray-600 mb-4">
            <p>
              Code expires in: <span className="text-blue-600">{formatTime(timeLeft)}</span>
            </p>
            <p>
              Didn't receive code?{" "}
              <Button type="button" variant="link" className="text-blue-600 p-0 h-auto ml-1" onClick={handleResendCode}>
                Resend Code
              </Button>
            </p>
          </div>

          <Button type="submit" className="w-full bg-blue-600 text-white">
            Send verification
          </Button>
        </form>
      </div>
    </div>
  )
}
