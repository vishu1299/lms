"use client"

import * as React from "react"
import type { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export default function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 text-sm text-muted-foreground">
        <div className="flex items-center space-x-3">
          <p className="text-sm">View</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value: any) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 border-none">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm">records per page</p>
        </div>
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Previous page</span>
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {(() => {
            const totalPages = table.getPageCount()
            const currentPage = table.getState().pagination.pageIndex + 1
            const pagesToShow: number[] = []

            for (let i = 1; i <= totalPages; i++) {
              if (
                i <= 4 || // always show first 4
                i === totalPages || // always show last
                Math.abs(i - currentPage) <= 1 // show current and nearby pages
              ) {
                pagesToShow.push(i)
              }
            }

            const uniquePages = [...new Set(pagesToShow)].sort((a, b) => a - b)

            return uniquePages.map((pageNumber, i) => {
              const prev = uniquePages[i - 1]
              const hasGap = prev && pageNumber - prev > 1

              return (
                <React.Fragment key={pageNumber}>
                  {hasGap && (
                    <span className="flex h-8 w-8 items-center justify-center text-sm text-muted-foreground">
                      ...
                    </span>
                  )}
                  <Button
                    variant={currentPage === pageNumber ? "default" : "ghost"}
                    className="h-8 w-8 p-0"
                    onClick={() => table.setPageIndex(pageNumber - 1)}
                  >
                    <span className="sr-only">Page {pageNumber}</span>
                    {pageNumber}
                  </Button>
                </React.Fragment>
              )
            })
          })()}

          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Next page</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
