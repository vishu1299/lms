"use client"

import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  type PaginationState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, Image, Star } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import DataTablePagination from "./data-table-pagination"
import DataTableColumnHeader from "./data-table-column-header"

interface Course {
  id: string
  name: string
  color: string
  rating: number
  enrollment: number
  completions: number
}

const data: Course[] = [
  {
    id: "1",
    name: "UI/UX Prototyping with Proto.io",
    color: "#3A3A3A",
    rating: 4.5,
    enrollment: 62,
    completions: 20,
  },
  {
    id: "2",
    name: "How to Make UX Case Study for Beginner",
    color: "#10B981",
    rating: 4.5,
    enrollment: 21,
    completions: 20,
  },
  {
    id: "3",
    name: "How to Conduct User Research from Scratch",
    color: "#2563EB",
    rating: 4.5,
    enrollment: 43,
    completions: 20,
  },
  {
    id: "4",
    name: "Creating Design System for Easier and Faster Design",
    color: "#10B981",
    rating: 4.5,
    enrollment: 181,
    completions: 20,
  },
  {
    id: "5",
    name: "Designing with User Centered Approach",
    color: "#3A3A3A",
    rating: 4.5,
    enrollment: 73,
    completions: 20,
  },
  {
    id: "6",
    name: "Intro to UI/UX Design for Graphic Designer",
    color: "#2563EB",
    rating: 4.5,
    enrollment: 31,
    completions: 20,
  },
]

export function CourseTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const columns: ColumnDef<Course>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Course Name" />,
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10  shrink-0 flex text-white items-center justify-center rounded-md" style={{ backgroundColor: row.original.color }}>
                <Image />
            </div>
            <span className="font-medium text-sm text-gray-700 whitespace-normal leading-snug">{row.original.name}</span>
          </div>
        )
      },
      enableSorting: true,
    },
    {
      accessorKey: "rating",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Rating" />,
      cell: ({ row }) => {
        const rating = row.original.rating
        return (
          <div className="flex items-center">
            {rating > 0 ? (
              <>
                <span className="mr-1">{rating}</span>
                <Star size={13} className="text-yellow-400 fill-current" />
              </>
            ) : (
              <span>-</span>
            )}
          </div>
        )
      },
      enableSorting: true,
    },
    {
      accessorKey: "enrollment",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Enrollment" />,
      cell: ({ row }) => {
        return <div className="flex items-center justify-center">{row.original.enrollment}</div>
      },
      enableSorting: true,
    },
    {
      accessorKey: "completions",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Completions" />,
      cell: ({ row }) => {
        return <div className="text-center">{row.original.completions}</div>
      },
      enableSorting: true,
    },
  ]

   const paginatedData = React.useMemo(() => {
    return {
      data: data.slice(pagination.pageIndex * pagination.pageSize, (pagination.pageIndex + 1) * pagination.pageSize),
      total: data.length,
    }
  }, [pagination.pageIndex, pagination.pageSize])

  const table = useReactTable({
    data: paginatedData.data,
    columns,
    pageCount: Math.ceil(paginatedData.total / pagination.pageSize),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true,
  })

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Course Status</h2>
        <div className="flex items-center gap-4 text-gray-500">
             <Button  className="h-8 font-normal px-2 text-sm" size="sm">
                Sort by
               <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
              <Button className="h-8 px-2 font-normal text-sm" size="sm">
              <span>Last 12 Month</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
         </div>
      </div>

      <div className="rounded-md">
        <Table>
          <TableHeader className="bg-gray-50 border-none">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="border-none" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-gray-500 font-medium">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow className="border-none" key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
