"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, Ellipsis, Bookmark } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface Post {
    id: number
    user: string
    avatar: string
    time: string
    title: string
    description: string
    image: string
    likes: number
    comments: number
}

interface CommentProps {
    user: string
    time: string
    text: string
    avatar: string
}

const commentTypes = ["Best", "Newest", "Oldest"]

const Comment = ({ user, time, text, avatar }: CommentProps) => (
    <div className="flex items-start gap-3">
        <Image src={avatar} alt="profile" width={40} height={40} className="rounded-full" />
        <div className="space-y-3">
            <div className="space-x-2 text-sm">
                <span className="font-medium">{user}</span>
                <span className="text-gray-400">{time}</span>
            </div>
            <p className="text-sm">{text}</p>
        </div>
    </div>
)

const IconWithLabel = ({ icon: Icon, label }: { icon: React.ElementType, label: string | number }) => (
    <div className="flex items-center gap-1 text-sm text-gray-500">
        <Icon className="w-4 h-4" />
        <span>{label}</span>
    </div>
)

const PostFeedCard = ({
    user,
    avatar,
    time,
    title,
    description,
    image,
    likes,
    comments,
}: Post) => {
    const [commentType, setCommentType] = useState("Best")

    return (
        <div className="bg-white rounded-xl mb-6 ">
            {/* Post Header */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <img src={avatar} alt={user} className="w-8 h-8 rounded-full" />
                    <div>
                        <p className="text-sm font-medium">{user}</p>
                        <p className="text-xs text-gray-500">{time}</p>
                    </div>
                </div>

                {/* Post Content */}
                <h2 className="font-semibold text-lg mb-1">{title}</h2>
                <p className="text-sm text-gray-700 mb-3">{description}</p>

                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="rounded-lg w-full max-h-[350px] object-cover mb-3"
                    />
                )}

                {/* Post Actions */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-6">
                        <IconWithLabel icon={Heart} label={likes} />
                        <IconWithLabel icon={MessageCircle} label={comments} />
                        <IconWithLabel icon={Share2} label="Share" />
                        <IconWithLabel icon={Bookmark} label="Save" />
                    </div>
                    <Ellipsis className="w-4 h-4 text-gray-500" />
                </div>
            </div>

            {/* Comment Sorting */}
            <div className="flex items-center mb-6 space-x-3">
                <h1 className="text-xl font-medium">Comments</h1>
                <Select value={commentType} onValueChange={setCommentType}>
                    <SelectTrigger className="w-28 border-gray-3 focus:ring-0 text-sm rounded-xl bg-[#EFEFEF] w-18 p-0 pl-3">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {commentTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                                {type}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Add Comment */}
            <div className="flex items-center gap-3 mb-8">
                <Image
                    src="/forum-details/one.png"
                    alt="profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <Input
                    placeholder="Add a comment"
                    className="border border-gray-300 shadow-none placeholder:text-gray-400"
                />
            </div>

            {/* Comments */}
            <div className="space-y-10">
                <Comment
                    user="AIResearcher"
                    time="1 hour ago"
                    text="Great insights! The democratization of AI tools is indeed a game-changer for developers."
                    avatar="/forum-details/two.png"
                />
                <Comment
                    user="TechEnthusiast"
                    time="45 minutes ago"
                    text="I'm particularly excited about the advancements in natural language processing. The potential applications are endless."
                    avatar="/forum-details/three.png"
                />
            </div>
        </div>
    )
}

export default PostFeedCard