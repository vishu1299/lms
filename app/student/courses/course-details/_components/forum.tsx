"use client"

import type React from "react"

import { useState } from "react"
import { Heart, MessageSquare, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ForumPost {
    id: string
    author: string
    avatar: string
    timestamp: string
    content: string
    likes: number
    replies?: ForumPost[]
    hasReplies?: boolean
}

const forumPosts: ForumPost[] = [
    {
        id: "1",
        author: "Guy Hawkins",
        avatar: "/courseDetails/one.png",
        timestamp: "1 days ago",
        content:
            "Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra arcu quam turpis risus amet turpis. Facilisis elementum tincidunt pellentesque sed rutrum enim.",
        likes: 20,
        hasReplies: true,
        replies: [
            {
                id: "1-1",
                author: "Maverick .N",
                avatar: "/courseDetails/two.png",
                timestamp: "1 days ago",
                content:
                    "Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra arcu quam turpis risus amet turpis. Facilisis elementum tincidunt pellentesque sed rutrum enim.",
                likes: 20,
            },
        ],
    },
    {
        id: "2",
        author: "John Smith",
        avatar: "/courseDetails/three.png",
        timestamp: "1 days ago",
        content:
            "Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra arcu quam turpis risus amet turpis. Facilisis elementum tincidunt pellentesque sed rutrum enim.",
        likes: 20,
        hasReplies: true,
    },
]

export default function Forum() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log({ name, email, comment })
    }

    const PostComponent = ({ post, isReply = false }: { post: ForumPost; isReply?: boolean }) => (
        <div className={`${isReply ? "ml-8 md:ml-12 mt-4" : "border-b border-[#DFDFDF]"} pb-5`}>
            <div>
                <div className="">
                    <div className="flex items-start gap-3 md:gap-4">
                        <Avatar className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                            <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                            <AvatarFallback>
                                {post.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex-1 ">
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <h3 className="font-semibold text-[#636363] text-sm md:text-base">{post.author}</h3>
                                    <span className="text-[#C1C1C1] text-xs md:text-sm">{post.timestamp}</span>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                            <MoreHorizontal className="h-4 w-4 text-[#C1C1C1]" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                        <DropdownMenuItem>Report</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <div>

                        <p className="text-[#636363] text-sm leading-relaxed mb-4 max-w-3xl">{post.content}</p>

                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-1">
                                    <Heart className="w-4 h-4 text-[#636363]" />
                                    <span className="text-sm  text-[#C1C1C1]">{post.likes}</span>
                                </button>
                                {post.hasReplies && !isReply && (
                                    <button className="flex items-center gap-1">
                                        <MessageSquare className="w-4 h-4 text-[#636363]" />
                                        <span className="text-sm text-[#C1C1C1]">Hide Replies</span>
                                    </button>
                                )}
                            </div>
                            <Button variant="ghost" size="sm" className={`${isReply ? "text-[#636363] text-md" : "text-[#C1C1C1] text-sm"} h-8 w-8 p-0`}>
                                Reply
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render replies */}
            {post.replies && post.replies.map((reply) => <PostComponent key={reply.id} post={reply} isReply={true} />)}
        </div>
    )

    return (
        <div className="">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
                <h1 className="text-xl font-medium text-[#6B6B6B]">Forum</h1>
                <div className="flex items-center gap-2">
                    <span className=" text-neutral-600 font-medium">Sort By:</span>
                    <Select defaultValue="newest">
                        <SelectTrigger className="w-[120px] justify-center items-center border-2 text-neutral-600 font-medium rounded-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                            <SelectItem value="popular">Popular</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Forum Posts */}
            <div className="space-y-6 mb-8 md:mb-12">
                {forumPosts.map((post) => (
                    <PostComponent key={post.id} post={post} />
                ))}
            </div>

            {/* Leave a Comment Section */}
            <div className="pt-8">
                <h2 className="text-xl font-medium text-[#6B6B6B] mb-6">Leave A Comment</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2">
                        <Input
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-[#F6F6F6] border-0 h-12 shadow-none placeholder:text-neutral-500"
                        />
                        <Input
                            type="email"
                            placeholder="info.avitex@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#F6F6F6] border-0 h-12 -ml-1 shadow-none placeholder:text-right placeholder:text-neutral-500"
                        />
                    </div>

                    <Textarea
                        placeholder="Write comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="bg-[#F6F6F6] border-0 min-h-[120px] resize-none placeholder:text-neutral-500"
                    />

                    <Button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-6 rounded-full font-medium"
                    >
                        Submit Comment
                    </Button>
                </form>
            </div>
        </div>
    )
}
