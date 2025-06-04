 "use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: React.ReactNode
}

export default function FloatingInput({ label, icon, type = "text", className, ...props }: FloatingInputProps) {
  const [focused, setFocused] = useState(true)
  const [value, setValue] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === "password"
  const inputType = isPassword && showPassword ? "text" : type

  return (
    <div className="relative">
      <div
        className={cn(
          "absolute left-3 top-0 z-10 origin-[0] -translate-y-1/2 scale-75 transform px-1 text-sm text-gray-500 duration-300",
          (focused || value) && "top-0 -translate-y-1/2 scale-75 bg-white px-1 text-gray-500",
          !focused && !value && "top-1/2 -translate-y-1/2 scale-100 bg-transparent text-gray-500",
        )}
      >
        {label}
      </div>
      <input
        type={inputType}
        className={cn(
          "block w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-gray-900 placeholder-black focus:outline-none",
          className,
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={label}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-500"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        ) : (
          icon
        )}
      </div>
    </div>
  )
}
