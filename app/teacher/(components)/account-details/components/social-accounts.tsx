import { Button } from "@/components/ui/button"
import { X, Image } from "lucide-react"

export default function SocialAccounts() {
    return (
        <div>
            <div className="rounded-xl">
                <h2 className="text-lg font-medium mb-4 text-gray-910">Social Accounts</h2>
                <div className="space-y-4 bg-gray-910/6 pb-4">
                    <div className="flex items-center bg-white h-15 px-2 justify-between">
                        <div className="flex items-center space-x-2">
                            <Image size={20} />
                            <span className="text-xs text-gray-910/40">Facebook</span>
                        </div>
                        <div className="">
                            <Button size="sm" className="bg-blue-600 text-white rounded-md px-5 text-xs font-medium">Link</Button>
                        </div>
                    </div>

                    <div className="flex items-center bg-white h-15 px-2 justify-between">
                        <div className="flex items-center space-x-2">
                            <Image size={20} />
                            <span className="text-xs text-gray-910/40">Instagram</span>
                        </div>
                        <div className="">
                            <Button size="sm" className="rounded-md px-5 text-xs font-medium text-gray-910 shadow-none">samanthawill<X /></Button>
                        </div>
                    </div>

                    <div className="flex items-center bg-white h-15 px-2 justify-between">
                        <div className="flex items-center space-x-2">
                            <Image size={20} />
                            <span className="text-xs text-gray-910/40">Twitter</span>
                        </div>
                        <div className="">
                            <Button size="sm" className="bg-blue-600 text-white rounded-md px-5 py-1 text-xs font-medium">Link</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
