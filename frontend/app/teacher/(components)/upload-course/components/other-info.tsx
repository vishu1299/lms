"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function OtherInformation() {
  
  const [tags, setTags] = useState("")

  return (
    <div className="text-[#3F3F44]">
      <h2 className="text-lg font-semibold mb-4">Other Information</h2>
      <div className="flex gap-4">
        <div className="space-y-1">
          <Label className="text-sm">
            Tags
          </Label>
          <Select value={tags} onValueChange={setTags}>
            <SelectTrigger className="border-none text-[#3F3F444D] bg-[#F6F6F6]">
              <SelectValue placeholder="Please Select"/>
            </SelectTrigger>
            <SelectContent className="text-[#3F3F444D]">
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="all-levels">All Levels</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end items-end">
        <Button size="sm" className="bg-blue-600 text-white">Submit for Review</Button>
      </div>
      </div>

      
    </div>
  )
}
