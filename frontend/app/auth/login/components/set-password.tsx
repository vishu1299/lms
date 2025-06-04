"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from "lucide-react"

type SetPasswordProps = {
  switchToSuccess: () => void
}

export default function SetPasswordPage({ switchToSuccess }: SetPasswordProps) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()

    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // Here you would send the new password to your backend
    console.log("Setting new password:", password)

    // Navigate to success page
    switchToSuccess()
  }

  return (
    <div className="flex items-center justify-center">
    <div className="w-full max-w-md rounded-md bg-white p-6 relative">
      <h1 className="text-center text-2xl font-semibold mb-2">Set New Password</h1>
      <p className="text-sm text-gray-600 text-center mb-6">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintvelit officia consequat duis enim velit mollit.
       </p>

      <form onSubmit={handleContinue}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#757575] font-normal">Enter New Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10 border-[#EFEFEF]"
                placeholder="Password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4 text-gray-500" />
                ) : (
                  <EyeIcon className="h-4 w-4 text-gray-500" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[#757575] font-normal">Re-type Enter New Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pr-10  border-[#EFEFEF]"
                placeholder="Password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOffIcon className="h-4 w-4 text-gray-500" />
                ) : (
                  <EyeIcon className="h-4 w-4 text-gray-500" />
                )}
              </Button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Continue
          </Button>
        </div>
      </form>
    </div>
    </div>
  )
}
