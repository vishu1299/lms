"use client"

import type React from "react"
import { useState } from "react"
import { Users, ChartLine, BookText } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DonationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const donationOptions = [
  { label: "Starter", value: 100 },
  { label: "Popular", value: 500, highlight: true },
  { label: "Impact", value: 1000 },
  { label: "Champion", value: 5000 },
]

const donationBenefits = [
  {
    title: "Support Platform Growth",
    description: "Help us improve and expand our learning tools",
    icon: ChartLine,
  },
  {
    title: "Create More Resources",
    description: "Enable development of quality educational content",
    icon: BookText,
  },
  {
    title: "Empower Communities",
    description: "Foster stronger learning communities",
    icon: Users,
  },
]

export function DonationDialog({ open, onOpenChange }: DonationDialogProps) {
  const [selectedAmount, setSelectedAmount] = useState(500)
  const [customAmount, setCustomAmount] = useState("")

  const handleAmountSelect = (value: number) => {
    setSelectedAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(0)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="px-5 py-6 max-h-[100vh] bg-white sm:max-w-[550px] border-none">
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold tracking-tight">Support Our Educational Community</h2>
            <p className="whitespace-nowrap text-sm">
              Your contribution helps us create better learning opportunities for everyone
            </p>
            <p className="text-xs text-muted-foreground">
              Join thousands of donors who believe in accessible education
            </p>
          </div>

          <div className="flex space-x-3 justify-between">
            {donationOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAmountSelect(option.value)}
                className={`flex flex-col items-center justify-center border-2 py-1 rounded-md min-w-[80px] w-full ${selectedAmount === option.value ? "border-blue-600 bg-blue-50" : "border-gray-3"
                  }`}
              >
                <span className="text-xs text-gray-4">{option.label}</span>
                <span className="font-bold">₹{option.value}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-2">₹</span>
            <Input
              className="pl-8 border border-gray-3 placeholder:text-gray-400 font-thin text-sm"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            {donationBenefits.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex flex-col items-center space-y-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon strokeWidth={3} className={`h-5 w-5 text-blue-600 ${title === "Empower Communities" && "fill-blue-600"}`} />
                </div>
                <h3 className="font-medium text-sm whitespace-nowrap">{title}</h3>
                <p className="text-sm text-gray-4">{description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Donor Information</h3>
            <Select>
              <SelectTrigger className="w-full border-gray-3 border-2 text-gray-500">
                <SelectValue placeholder="Select Teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="teacher1">Ms. Johnson</SelectItem>
                <SelectItem value="teacher2">Mr. Smith</SelectItem>
                <SelectItem value="teacher3">Dr. Patel</SelectItem>
                <SelectItem value="teacher4">Mrs. Garcia</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Message of Support (Optional)" className="min-h-[100px] border-gray-3 border-2 placeholder:text-gray-500 placeholder:text-sm resize-none" />
          </div>

          <Button className="w-full" size="lg">
            Donate Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function DonateButton({className = ""}:{ className?: string }) {
    const [open, setOpen] = useState(false)
  return <div>
    <Button
      size="sm"
      className={`bg-emerald-500 text-white sm:size-sm md:size-md lg:size-xl xl:size-2xl rounded-md ${className}`}
      onClick={() => setOpen(true)}
    >
      Donate
    </Button>
    <DonationDialog open={open} onOpenChange={setOpen} />
  </div>
}

