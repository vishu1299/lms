import * as React from "react"
<<<<<<< HEAD
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
=======
import Link from "next/link"
import {
  MoreHorizontalIcon, ChevronLeft, ChevronRight
} from "lucide-react"

import { cn } from "@/lib/utils"
>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54

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
<<<<<<< HEAD
      className={cn("flex flex-row items-center gap-1", className)}
=======
      className={cn("flex flex-row items-center ", className)}
>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54
      {...props}
    />
  )
}

<<<<<<< HEAD
function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
=======
function PaginationItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" className={cn("-ml-px", className)} {...props} />
>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54
}

type PaginationLinkProps = {
  isActive?: boolean
<<<<<<< HEAD
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">
=======
} & React.ComponentProps<typeof Link>


>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54

function PaginationLink({
  className,
  isActive,
<<<<<<< HEAD
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
=======
  ...props
}: PaginationLinkProps) {
  return (
    <Link
>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
<<<<<<< HEAD
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
=======
        "flex h-9 w-9 items-center justify-center text-[#3F3F44] border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none",
        isActive ? "font-semibold" : "",
>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
<<<<<<< HEAD
=======
  isActive,
>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
<<<<<<< HEAD
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
=======
      isActive={isActive}
      className={cn(className)}
      {...props}
    >
      <ChevronLeft size={16} />
>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54
    </PaginationLink>
  )
}

function PaginationNext({
  className,
<<<<<<< HEAD
=======
  isActive,
>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
<<<<<<< HEAD
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
=======
      isActive={isActive}
      className={cn(className)}
      {...props}
    >
      <ChevronRight size={16} />
>>>>>>> 770a1dd20b9ec3d060ab910d3705b2cb5f6a2e54
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
