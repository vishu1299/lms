"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, Lock, SquareArrowRight} from "lucide-react"
import { Switch } from "@/components/ui/switch"


interface MeetingRoomCardProps {
  room: string
  available: boolean
  capacity: string
  equipment: string
  statusInfo?: string
  nextAvailable?: string
  hasInput?: boolean
}

const MeetingRoomCard = ({
  room,
  available,
  capacity,
  equipment,
  statusInfo,
  nextAvailable,
  hasInput = false,
}: MeetingRoomCardProps) => {

  const [isAvailable, setAvailable] = useState(available)
  return (
    <div className="border-none bg-white p-4 rounded-lg flex-1 text-gray-600 space-y-2">
      <div className="flex justify-between items-center">
      <h4 className="text-lg mb-4 text-black">Room {room}</h4>
      <div className="flex items-center space-x-2">
        <h4>Available</h4>
         <Switch  checked={isAvailable} onCheckedChange={setAvailable}/>  
      </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm">Stalus</span>
        <Badge className={available? "bg-green-200 text-green-600" : "bg-red-300 text-red-600"}>
          {available ? "Available" : "In Use"}
        </Badge>
      </div>
      <div className="flex items-center justify-between">
      <span className="text-sm mb-1">Capacily </span>
      <span>{capacity}</span>
     
      </div>
      <div className="flex items-center justify-between">
      <span className="text-sm mb-1">Equipment</span>
      <span>{equipment}</span>
     
      </div>      
      {statusInfo && <div className="flex items-centr justify-between">
        <span>Current</span>
        <span>{statusInfo}</span>
        </div>}
      {nextAvailable && <div className="flex items-centr justify-between my-6">
        <span>Next Awzilable</span>
        <span>{nextAvailable}</span>
        </div> }
      {hasInput && (
        <div className="space-y-2">
          <p>Enter code to participate</p>
          <div className="relative">
          <Input type="text" placeholder="Enter acpess code" className="mb-7 border-none bg-gray-100" />
          <Lock className="absolute top-1/2 right-3 -translate-y-1/2" />
          </div>
        </div>
        
      )}
      <Button className={` w-full ${available? "bg-blue-500 text-white font-thin": "bg-gray-300 text-gray-400"}`} disabled={!available}  >
        {available ? (
          <>
            <SquareArrowRight strokeWidth={3} className="w-4 h-4 text-white" />
            Join Meeting
          </>
          
        ) : (
          <>
            <Clock className="w-4 h-4 text-gray-800" />
            Currently Unavailable
          </>
        )}
      </Button>
    </div>
  )
}

export default MeetingRoomCard
