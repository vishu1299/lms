"use client"

import type React from "react"

import { useState } from "react"
import { AlignJustify, CheckCheck, Heart, Image, ImageIcon, MoreVertical, Paperclip, Search, SmilePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

type Message = {
  id: number
  sender: string
  content: string
  time: string
  isCurrentUser: boolean
  liked?: boolean
  read?: boolean
}

type Contact = {
  id: number
  name: string
  avatar: string
  online?: boolean
  unread?: number
  pinned?: boolean
  lastMessage?: string
}

export default function MessageInterface() {
  const isMobile = useMobile()
  const [showSidebar, setShowSidebar] = useState(!isMobile)
  const [activeContact, setActiveContact] = useState<Contact>(contacts[0])
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Ilkay Olivier",
      content: "Ut volutpat pulvinar ullamcorper",
      time: "08:20 AM",
      isCurrentUser: false,
      liked: true,
    },
    {
      id: 2,
      sender: "You",
      content: "Morbi vitae leo sed nunc",
      time: "08:30 AM",
      isCurrentUser: true,
      read: true,
    },
    {
      id: 3,
      sender: "Ilkay Olivier",
      content: "Ut volutpat pulvinar ullamcorper",
      time: "08:20 AM",
      isCurrentUser: false,
      liked: true,
    },
    {
      id: 4,
      sender: "You",
      content: "Curabitur interdum, sapien eu pharetra efficitur, ipsum erat.",
      time: "07:15 AM",
      isCurrentUser: true,
      read: true,
    },
    {
      id: 5,
      sender: "You",
      content: "Thank you so much!",
      time: "08:30 AM",
      isCurrentUser: true,
      read: true,
    },
  ])
  const [typing, setTyping] = useState(true)
  const [inputValue, setInputValue] = useState("")

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "You",
        content: inputValue,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isCurrentUser: true,
      }
      setMessages([...messages, newMessage])
      setInputValue("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleLike = (id: number) => {
    setMessages(messages.map((message) => (message.id === id ? { ...message, liked: !message.liked } : message)))
  }

  return (
    <div className="md:flex">
      <div
        className={cn(
          "w-full max-w-[280px] border-r border-gray-200 flex-shrink-0 bg-white",
          isMobile && "absolute z-10 h-full",
          isMobile && !showSidebar && "hidden",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold mb-4">All Messages</h1>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search here..." className="pl-8 bg-gray-50 border-0" />
            </div>
          </div>

          <div className="overflow-y-auto flex-1">
            <div className="py-2 px-4 text-xs font-medium text-gray-400">PINNED</div>
            {contacts
              .filter((contact) => contact.pinned)
              .map((contact) => (
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  active={activeContact.id === contact.id}
                  onClick={() => {
                    setActiveContact(contact)
                    if (isMobile) setShowSidebar(false)
                  }}
                />
              ))}

            {contacts
              .filter((contact) => !contact.pinned)
              .map((contact) => (
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  active={activeContact.id === contact.id}
                  onClick={() => {
                    setActiveContact(contact)
                    if (isMobile) setShowSidebar(false)
                  }}
                />
              ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <Button className="w-full text-white bg-blue-600" size="lg">
              New Message
            </Button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
                <AlignJustify />
              </Button>
            )}
            <Image />
            <div>
              <div className="font-medium text-sm text-neutral-800">{activeContact.name}</div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-500">Online</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={cn("flex", message.isCurrentUser ? "justify-end" : "justify-start")}>
              <div className="flex flex-col max-w-[80%]">
                <div
                  className={cn(
                    "rounded-lg p-2 inline-block text-sm",
                    message.isCurrentUser ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800",
                  )}
                >
                  {message.content}
                </div>
                <div className="flex items-center mt-1">
                  {!message.isCurrentUser && (
                    <button onClick={() => toggleLike(message.id)} className="mr-1">
                      <Heart
                        className={cn("h-4 w-4", message.liked ? "fill-blue-500 text-blue-500" : "text-gray-400")}
                      />
                    </button>
                  )}
                  <span className="text-xs text-gray-400 mr-1">{message.time}</span>
                  {message.isCurrentUser && message.read && (
                     <CheckCheck size={13} className="text-blue-600" />
                  )}
                </div>
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex items-center text-sm text-gray-400">
              <span>Typing</span>
              <span className="ml-1">•••</span>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="">
            <div className="">
              <Input
                placeholder="Type something..."
                className="pb-20 pt-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center" >
              <Button variant="ghost" size="icon">
              <ImageIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
                <Button variant="ghost" size="icon" >
                  <SmilePlus className="h-5 w-5" />
                </Button>   
              </div>
              <Button size="sm" className="bg-blue-600 text-white px-5" onClick={handleSend}>Send</Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactItem({
  contact,
  active,
  onClick,
}: {
  contact: Contact
  active: boolean
  onClick: () => void
}) {
  return (
    <div
      className={cn("flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50", active && "bg-gray-50")}
      onClick={onClick}
    >
      <Image />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-neutral-800">{contact.name}</div>
          {contact.unread && (
            <div className="h-5 w-5 rounded-full bg-blue-500 text-xs flex items-center justify-center">
              {contact.unread}
            </div>
          )}
        </div>
        {contact.lastMessage && <div className="text-sm text-gray-500 truncate">{contact.lastMessage}</div>}
      </div>
    </div>
  )
}

// Sample data
const contacts: Contact[] = [
  {
    id: 1,
    name: "Ilkay Olivier",
    avatar: "",
    online: true,
  },
  {
    id: 2,
    name: "Daniel Berraldi",
    avatar: "",
    pinned: true,
  },
  {
    id: 3,
    name: "James Atkinson",
    avatar: "",
    unread: 3,
    pinned: true,
  },
  {
    id: 4,
    name: "Olivia James",
    avatar: "",
    pinned: true,
  },
  {
    id: 5,
    name: "Rodrigo Mendez",
    avatar: "",
    unread: 2,
  },
  {
    id: 6,
    name: "Michael Trippler",
    avatar: "",
  },
  {
    id: 7,
    name: "Jessica Joan",
    avatar: "",
  },
  {
    id: 8,
    name: "Giorgio Christensen",
    avatar: "",
  },
]
