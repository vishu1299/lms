import { Input } from "@/components/ui/input"
import { InputHTMLAttributes } from "react"

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Search({className, ...props}: SearchProps) {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search..."
        className={`pl-8 rounded border border-gray-300 shadow-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900 ${className}`}
        {...props}
       />
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 pointer-events-none opacity-50" />
    </div>
  )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}