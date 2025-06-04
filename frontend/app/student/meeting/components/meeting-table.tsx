"use client"

import { useState, useEffect } from "react"
import { ChevronsUpDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { type Meeting, meetings as initialMeetings } from "./meeting-data"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import Join from "./join-meeting"

export default function MeetingTable() {
    const [meetings, setMeetings] = useState<Meeting[]>(initialMeetings)
    const [searchQuery, setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState<"date" | "duration" | "participants">("date")
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
    const [filterType, setFilterType] = useState<"all" | "public" | "private">("all")
    const isMobile = useMediaQuery("(max-width: 768px)")

    // Filter and sort meetings based on search query, sort, and filter options
    useEffect(() => {
        let filteredMeetings = [...initialMeetings]

        // Apply search filter
        if (searchQuery) {
            filteredMeetings = filteredMeetings.filter((meeting) =>
                meeting.title.toLowerCase().includes(searchQuery.toLowerCase()),
            )
        }

        // Apply meeting type filter
        if (filterType !== "all") {
            filteredMeetings = filteredMeetings.filter((meeting) => meeting.type.toLowerCase() === filterType)
        }

        // Apply sorting
        filteredMeetings.sort((a, b) => {
            if (sortBy === "date") {
                return sortOrder === "asc"
                    ? new Date(a.date).getTime() - new Date(b.date).getTime()
                    : new Date(b.date).getTime() - new Date(a.date).getTime()
            } else if (sortBy === "duration") {
                const getDurationMinutes = (duration: string) => {
                    // Handle formats like "1h 30m", "1h", "30m"
                    let minutes = 0

                    // Extract hours
                    const hoursMatch = duration.match(/(\d+)h/)
                    if (hoursMatch && hoursMatch[1]) {
                        minutes += Number.parseInt(hoursMatch[1], 10) * 60
                    }

                    // Extract minutes
                    const minutesMatch = duration.match(/(\d+)m/)
                    if (minutesMatch && minutesMatch[1]) {
                        minutes += Number.parseInt(minutesMatch[1], 10)
                    }

                    return minutes
                }

                const aDuration = getDurationMinutes(a.duration)
                const bDuration = getDurationMinutes(b.duration)

                return sortOrder === "asc" ? aDuration - bDuration : bDuration - aDuration
            } else if (sortBy === "participants") {
                return sortOrder === "asc" ? a.participants - b.participants : b.participants - a.participants
            }
            return 0
        })

        setMeetings(filteredMeetings)
    }, [searchQuery, sortBy, sortOrder, filterType])

    return (
        <div className="space-y-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="relative w-full md:w-auto md:flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4" />
                    <Input
                        type="search"
                        placeholder="Search"
                        className="pl-8 w-full border border-gray-6 placeholder:text-gray-7"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex-row md:flex space-x-2 w-full md:w-auto">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full md:w-auto justify-between border border-gray-6">
                                Sort by {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                                <ChevronDown strokeWidth={3} className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => {
                                    setSortBy("date")
                                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                }}
                            >
                                Date {sortBy === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {
                                    setSortBy("duration")
                                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                }}
                            >
                                Duration {sortBy === "duration" && (sortOrder === "asc" ? "↑" : "↓")}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {
                                    setSortBy("participants")
                                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                }}
                            >
                                Participants {sortBy === "participants" && (sortOrder === "asc" ? "↑" : "↓")}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full md:w-auto justify-between border border-gray-6">
                                {filterType === "all" ? "All Meeting" : filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                                <ChevronDown strokeWidth={3} className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setFilterType("all")}>All Meeting</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterType("public")}>Public</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterType("private")}>Private</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="rounded-md">
                <div className="grid grid-cols-12 space-x-4 px-4 py-3 bg-[#F6F7F9] font-semibold text-gray-7">
                    <div className="col-span-12 md:col-span-3">Meeting</div>
                    <div className="hidden md:block md:col-span-2">Date</div>
                    <div className="hidden md:block md:col-span-2">Duration</div>
                    <div className="hidden md:block md:col-span-2">Participants</div>
                    <div className="hidden md:flex md:col-span-2 items-center whitespace-nowrap ">Meeting type <ChevronsUpDown size={15} className="text-[#141414] ml-2" /></div>
                    <div className="hidden md:block md:col-span-2"></div>
                </div>

                <div className="divide-y divide-gray-6">
                    {meetings.length > 0 ? (
                        meetings.map((meeting, index) => (
                            <div key={index} className={cn("grid grid-cols-12 space-x-4 px-4 py-3 text-sm font-medium", "hover:bg-gray-50")}>
                                <div className="col-span-12 md:col-span-3 ">
                                    {meeting.title}
                                    {isMobile && (
                                        <div className="text-sm text-gray-500 mt-1">
                                            {meeting.date} · {meeting.duration} · {meeting.participants} participants · {meeting.type}
                                        </div>
                                    )}
                                </div>
                                <div className="hidden md:block md:col-span-2">{meeting.date}</div>
                                <div className="hidden md:block md:col-span-2">{meeting.duration}</div>
                                <div className="hidden md:block md:col-span-2">{meeting.participants}</div>
                                <div className="hidden md:block md:col-span-2">{meeting.type}</div>
                                <div className="col-span-12 md:col-span-1 flex justify-end">
                                    <Join />
                                 </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-8 text-center text-gray-500">
                            No meetings found. Try adjusting your search or filters.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
