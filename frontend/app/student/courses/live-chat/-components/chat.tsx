'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Message {
  id: number;
  name: string;
  initials: string;
  color: string;
  message: string;
  below: string
}

const messages: Message[] = [
  {
    id: 1,
    name: "James Davis",
    initials: "JD",
    color: "bg-blue-100 text-blue-700",
    message:
      "Is tnis wodshop coveding the new regression techniguos mentioned last week?",
      below: "e miniHa Ha"
  },
  {
    id: 2,
    name: "James Davis",
    initials: "SC",
    color: "bg-green-100 text-green-700",
    message:
    "Yes, well be covering the new regression fecholgues in about 10 minutes , Were slarting wth a rovnw of list weeks ooncepis",
    below: "mHHK"
   },
  {
    id: 3,
    name: "James Davis",
    initials: "HH",
    color: "bg-purple-100 text-purple-700",
    message:
      "The audo Fe culing cut a bt for me, Is anyone elee experiencng insr",
      below: "Jusdl mw"
  },
];

export default function Chat() {
  return (
    <div className="mx-auto bg-white space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Live Chat</h2>

      <div className="space-y-4 ml-4">
        {messages.map((msg: Message) => (
          <div key={msg.id} className="flex gap-3 items-start">
            <div
              className={`flex items-center justify-center w-9 h-8 rounded-full text-sm font-semibold ${msg.color}`}
            >
              {msg.initials}
            </div>
            <div>
              <p className="font-medium text-[#111827]">{msg.name}</p>
              <p className="text-[#8C94A1] max-w-2xl">{msg.message}
                <br></br>
                 {msg.below}
              </p>

            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center pt-2">
        <Input
          placeholder="Type your message here..."
          className="flex-1 border border-[#E5E7EB] rounded-r py-6 placeholder:text-[#BABAC2]"
        />
        <Button
          size="icon"
          className="bg-blue-500 rounded-l text-white flex items-center justify-center py-6 px-6 "
        >
          <Send  className="" />
        </Button>
      </div>
    </div>
  );
}
