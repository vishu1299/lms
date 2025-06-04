import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Circle, Expand, Flag, Play, Settings, Share2, SignalHigh } from "lucide-react"
import { CourseTabs } from "./course-tabs"

const CourseDetail = () => {
    return (
        <div className="space-y-10 mb-10">
            <div className="bg-[#9D9D9D] bg-[linear-gradient(to_top,_#2C2C2C_2%,_#9D9D9D_5%)] w-full h-100 flex items-end p-6 rounded-lg">
                <div className="flex items-center space-x-3 w-full">
                    <div className="bg-[#202226] rounded-lg py-2 px-6">
                        <Play size={18} className="text-white fill-current" />
                    </div>
                    <div className="flex items-center justify-between bg-[#202226] w-full h-7 rounded space-x-3 p-3">
                        <div className="border border-[#666666] w-full h-3">
                            <div className="bg-[#666666] w-[15%] h-3">
                                <div className="bg-[#007DFC] h-3 w-[30%]" />
                                </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <SignalHigh strokeWidth={3} className="text-blue-600" />
                            <div className="bg-white rounded px-1 h-4 text-sm font-bold flex items-center justify-center">CC</div>
                            <Settings size={17}  className="text-white" />
                            <Expand size={15} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='font-medium text-xl mb-4'>Mobile App Design In Sketch: UX and UI Design From Scratch</h1>
                <div className="flex -items-center justify-between">
                    <div className="flex items-center space-x-1">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={"/placeholder.svg"} alt={"albert flores"} />
                            <AvatarFallback><Circle size={25} className="fill-gray-350 text-gray-350" /></AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                            <h2 className="font-medium">Albert Flores</h2>
                            <p className=" text-[#5A5A5A]">Revenue</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 text-[#93989A]">
                     <div className="border p-2 rounded border-[#F3F3F3] flex items-center text-sm space-x-2">
                        <Flag size={15} />
                        </div>   
                        <div className="flex items-center text-sm space-x-2 border p-2 rounded border-[#F3F3F3]"><Share2 size={15} /> <span>Share</span></div>
                    </div>
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-lg font-medium">Overview</h1>
                <p className="text-sm text-[#93989A]">Your job as a UX Designer is to give a world-class experience for tiket.com users. You have main responsibilities to conduct the user and/or evaluation research, do a lot of sketching, and create wireframes that have high usability. As a UX Designer you'll work closely with team of UX, Engineers and Product Managers to design products that are simple but great for the user, focusing on developing user scenarios, task analysis, process flows & Lo-FI design mocks. </p>
            </div>
            <CourseTabs />
        </div>
    )
}

export default CourseDetail