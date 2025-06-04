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
}

const messages: Message[] = [
  {
    id: 1,
    name: "James Davis",
    initials: "JD",
    color: "bg-blue-100 text-blue-700",
    message:
      "Is tnis wodshop coveding the new regression techniguos mentioned last week?",
  },
  {
    id: 2,
    name: "James Davis",
    initials: "SC",
    color: "bg-green-100 text-green-700",
    message:
    "Yes, well be covering the new regression fecholgues in about 10 minutes , Were slarting wth arovnw of list weeks ooncepis mннк"
   },
  {
    id: 3,
    name: "James Davis",
    initials: "HH",
    color: "bg-purple-100 text-purple-700",
    message:
      "The audo Fe culing cut a bt for me, Is anyone elee experiencng insr Jusdl mw",
  },
];

export default function LiveChat() {
  return (
    <div className="mx-auto bg-white space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Live Chat</h2>

      <div className="space-y-4">
        {messages.map((msg: Message) => (
          <div key={msg.id} className="flex gap-3 items-start">
            <div
              className={`flex items-center justify-center w-9 h-8 rounded-full text-sm font-semibold ${msg.color}`}
            >
              {msg.initials}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{msg.name}</p>
              <p className="text-sm text-gray-600">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center pt-2">
        <Input
          placeholder="Type your message here..."
          className="flex-1 border-gray-200 rounded-r"
        />
        <Button
          size="icon"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-l "
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
