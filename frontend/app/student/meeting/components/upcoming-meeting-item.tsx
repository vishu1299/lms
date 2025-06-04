import { Button } from "@/components/ui/button"

interface UpcomingMeetingItemProps {
  title: string
  room: string
  time: string
  canJoin?: boolean
}

const UpcomingMeetingItem = ({ title, room, time, canJoin }: UpcomingMeetingItemProps) => {
  return (
    <div className="flex items-center justify-between shadow py-1">
      <div className="mx-4 text-gray-600">
        <p className="text-lg">{title}</p>
        <p>
          {room} {time}
        </p>
      </div>
      <Button className={` mr-4 ${canJoin ? "bg-blue-500 text-gray-200" : "bg-gray-200 text-gray-400"} px-2`}>
        {canJoin ? "Join" : "Schedule"}
      </Button>
    </div>
  )
}

export default UpcomingMeetingItem
