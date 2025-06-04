"use client"

import * as React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
 } from "@/components/ui/pagination"  
 
type PaginatedControlProps = {
  className?: string
}


const PaginatedControl = ({ className }: PaginatedControlProps) => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const totalPages = 3

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Pagination  className={` ${className}`} >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#"
            onClick={() => handlePageClick(currentPage - 1)}
            aria-disabled={currentPage === 1}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1
          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => handlePageClick(page)}
                href="#"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <PaginationNext href="#"
            onClick={() => handlePageClick(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginatedControl
