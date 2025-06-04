import * as React from "react"
import Link from "next/link"
import {
  MoreHorizontalIcon, ChevronLeft, ChevronRight
} from "lucide-react"

import { cn } from "@/lib/utils"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center ", className)}
      {...props}
    />
  )
}

function PaginationItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" className={cn("-ml-px", className)} {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & React.ComponentProps<typeof Link>



function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "flex h-9 w-9 items-center justify-center text-[#3F3F44] border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none",
        isActive ? "font-semibold" : "",
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  isActive,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      isActive={isActive}
      className={cn(className)}
      {...props}
    >
      <ChevronLeft size={16} />
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  isActive,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      isActive={isActive}
      className={cn(className)}
      {...props}
    >
      <ChevronRight size={16} />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
