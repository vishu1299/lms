"use client"

import { useState } from "react"
import type { ColumnDef, ColumnFiltersState, PaginationState, SortingState } from "@tanstack/react-table"
import { Star, MoreHorizontal, Image, Funnel, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import DataTable from "./data-table"
import DataTableColumnHeader from "./data-table-column-header"
import { cn } from "@/lib/utils"

// Define the review type
type CourseReview = {
  id: string
  courseName: string
  studentName: string
  studentLocation: string
  rating: number
  reviewText: string
}

// Sample data
const reviews: CourseReview[] = [
  {
    id: "1",
    courseName: "UI/UX Prototyping with Proto.io",
    studentName: "Wade Warren",
    studentLocation: "New Zealand",
    rating: 5,
    reviewText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: "2",
    courseName: "How to Make UX Case Study for Beginner",
    studentName: "Cameron William",
    studentLocation: "United States",
    rating: 4,
    reviewText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: "3",
    courseName: "How to Conduct User Research from Scratch",
    studentName: "Leslie Alexander",
    studentLocation: "Australia",
    rating: 4,
    reviewText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: "4",
    courseName: "How to Make UX Case Study for Beginner",
    studentName: "Robert Fox",
    studentLocation: "United States",
    rating: 5,
    reviewText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
]

// Define the columns
export const columns: ColumnDef<CourseReview>[] = [
  {
    accessorKey: "courseName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Course Name" />,
    cell: ({ row }) => {
      const bgColors = [
        "bg-gray-910", 
        "bg-emerald-500",
        "bg-blue-600",
        "bg-emerald-500",
      ]
      const colorClass = bgColors[row.index % bgColors.length]

      return (
        <div className="flex items-center gap-2 w-45">
          <div className={cn("h-11 w-11 rounded flex-shrink-0 flex items-center justify-center text-white", colorClass)}>
            <Image size={20} />
          </div>
          <span className="text-xs font-medium whitespace-normal text-gray-910">{row.original.courseName}</span>
        </div>
      )
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "studentName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Student" />,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col w-40">
          <span className="text-xs text-gray-910">{row.original.studentName}</span>
          <span className="text-xs text-gray-910/50">{row.original.studentLocation}</span>
        </div>
      )
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "review",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Review" />,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1 w-70">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn("h-4 w-4 mt-6", i < row.original.rating ? "text-blue-500 fill-blue-500" : "text-gray-300")}
              />
            ))}
          </div>
          <p className="text-xs text-gray-910/50 whitespace-normal">{row.original.reviewText}</p>
        </div>
      )
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="text-right w-40">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4 text-transparent-30" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Edit review</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete review</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]

export default function CourseReviewsTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  return (
    <div className="">
      <div className="rounded-md">
        <div className="flex items-center justify-between py-4">
          <h2 className="text-lg font-semibold text-gray-910">Course Reviews</h2>
          <div className="flex items-center gap-2 text-transparent-70">
            <Button variant="outline" size="sm" className="h-8 text-gray-400 shadow-none font-normal border-none">
              <Funnel />
              <span>Filter Order</span>
            </Button>
            <Button variant="outline" size="sm" className="shadow-none h-8 text-gray-400 font-normal border-none">
              <span>Last 12 Month</span>
              <ChevronDown />
            </Button>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={{ total: reviews.length, data: reviews }}
          sorting={sorting}
          setSorting={setSorting}
          pagination={pagination}
          setPagination={setPagination}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      </div>
    </div>
  )
}