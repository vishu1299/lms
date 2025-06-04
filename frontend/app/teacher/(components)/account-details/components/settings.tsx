import { ChevronRight, MessageSquareMore,} from "lucide-react"

export default function Settings() {
  return (
    <div className="">
      <div className="rounded-xl">
        <h2 className="text-lg font-medium mb-4 text-gray-910">Settings</h2>
        <div className="bg-white rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-11 h-11 bg-gray-30 rounded flex items-center justify-center">
                <MessageSquareMore  className="text-green-350" />
             </div>
            <div>
              <h3 className="text-sm font-medium text-gray-910">My Message</h3>
              <p className="text-sm text-gray-910/40">Inbox and draft</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-transparent-30" />
        </div>
      </div>
    </div>
  )
}
