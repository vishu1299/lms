import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function SortButton() {
  return (
    <Button
      variant="outline"
      className="rounded-lg bg-[#F3F4F6] border border-[#F7F7F9] text-gray-400 mb-4"
    >
      Sort <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  )
}
