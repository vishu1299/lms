"use client"

import { useState } from "react"
import { LockKeyhole, SquareArrowRight, X } from "lucide-react"
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


interface JoinMeetingDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function JoinMeetingDialog({ open, onOpenChange }: JoinMeetingDialogProps) {
    const [accessCode, setAccessCode] = useState("")

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogOverlay className="bg-transparent" />
            <DialogContent className="sm:max-w-md p-0 gap-0 border-none overflow-hidden bg-white">
                <div className="p-6 space-y-6">

                    <h2 className="text-lg border-b border-lightgray-10 pb-4">Join Meeting</h2>

                    <div className="">
                        <p className="text-sm text-gray-4 font-thin mb-2">Enter code to participate</p>

                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Enter access code"
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                                className="pr-10 placeholder:text-xs placeholder:text-[#C4C9D0] bg-[#F9FAFB]"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <LockKeyhole size={13} className="text-[#C4C9D0]" />
                            </div>
                        </div>
                    </div>
                    <Button
                    size="sm"
                        className="w-full rounded-xl h-12 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 font-normal"
                        onClick={() => {
                            // Handle join meeting logic here
                            onOpenChange(false)
                        }}
                    >
                        <SquareArrowRight strokeWidth={3} />
                        Join Meeting
                    </Button>

                </div>


            </DialogContent>

        </Dialog>
    )
}

export default function Join() {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div>
            <Button size="sm" className="w-full md:w-auto text-indigo-560 border border-indigo-560 px-5 bg-[#F0F1FF] " onClick={() => setDialogOpen(true)}>
                Join
            </Button>
            <JoinMeetingDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </div>

    )
}