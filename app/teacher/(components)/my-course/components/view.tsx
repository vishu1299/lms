"use client"
import {useState} from "react"
import {
  Select,
  SelectContent,
   SelectItem,
   SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RecordsSelector() {
    const [recordsPerPage, setRecordsPerPage] = useState("10")
  return (
    <div className="flex items-center gap-2 text-gray-700">
    <span className="text-sm">View</span>
    <Select value={recordsPerPage} onValueChange={setRecordsPerPage}>
      <SelectTrigger className="w-[80px] border-none">
        <SelectValue placeholder="10" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="5">5</SelectItem>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="50">50</SelectItem>
        <SelectItem value="100">100</SelectItem>
      </SelectContent>
    </Select>
    <span className="text-sm whitespace-nowrap">records per page</span>
  </div>
  )
}
