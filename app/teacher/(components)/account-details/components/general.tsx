 "use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, EyeOff, Eye } from "lucide-react"

type Field = {
  id: string
  label: string
  placeholder?: string
  type?: string
}

const fields: Field[] = [
  { id: "firstName", label: "First Name", placeholder: "Samantha" },
  { id: "lastName", label: "Last Name", placeholder: "William" },
  { id: "email", label: "Email", placeholder: "sam.william@mail.com", type: "email" },
  { id: "phone", label: "Phone Number", placeholder: "+12 345 67890" },
   { id: "username", label: "Username", placeholder: "samanthawill" },
  { id: "password", label: "Password", placeholder: "••••••••••", type: "password" },
  { id: "confirmPassword", label: "Confirm Password", placeholder: "••••••••••", type: "password" },
]

export default function General() {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  })

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  return (
    <div>
      <h2 className="text-lg font-medium mb-6">General</h2>
      <div className="flex space-x-6">
        <div className="bg-gray-350 w-35 h-40 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center -mb-[10rem]">
            <Camera className="text-gray-910" />
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.slice(0, 4).map(({ id, label, placeholder, type }) => (
            <div key={id} className="space-y-2">
              <Label htmlFor={id} className="font-normal text-gray-910">
                {label}
              </Label>
              <Input id={id} placeholder={placeholder} type={type} className="bg-gray-40 placeholder:text-transparent-30" />
            </div>
          ))}

           <div className="space-y-2">
            <Label htmlFor="expertise" className="font-normal text-gray-910">
              Expertise
            </Label>
            <Select defaultValue="ui-ux">
              <SelectTrigger className="border-none bg-gray-40 text-transparent-30 text-xs">
                <SelectValue placeholder="Select expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ui-ux">Design &gt; UI/UX Design</SelectItem>
                <SelectItem value="graphic">Graphic Design</SelectItem>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="product">Product Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Username field */}
          <div className="space-y-2">
            <Label htmlFor="username" className="font-normal text-gray-910">
              Username
            </Label>
            <Input id="username" placeholder="samanthawill" className="bg-gray-40 placeholder:text-transparent-30" />
          </div>

           <div className="space-y-2">
            <Label htmlFor="password" className="font-normal text-gray-910">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="••••••••••"
                type={passwordVisibility.password ? "text" : "password"}
                className="bg-gray-40 placeholder:text-transparent-30 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-910/50 hover:text-gray-600"
                onClick={() => togglePasswordVisibility("password")}
              >
                {passwordVisibility.password ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
            </div>
          </div>

           <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="font-normal text-gray-910 ">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                placeholder="••••••••••"
                type={passwordVisibility.confirmPassword ? "text" : "password"}
                className="bg-gray-40 placeholder:text-transparent-30 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-910/50 hover:text-gray-600"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {passwordVisibility.confirmPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
