import { EllipsisVertical, Dot, CircleSmall } from "lucide-react"
import { MultiSegmentProgress } from "@/components/ui/multisegment-progress"
const CourseState = () => {
    return (
        <div className="shadow px-2 py-4">
            <div className="flex justify-between mb-5 pt-11">
                <h1 className="text-lg font-semibold text-gray-910">Course State </h1>
                <EllipsisVertical className="text-gray-910/30" />
            </div>
            <div className="flex items-center justify-center mb-8">
                <MultiSegmentProgress
                    segments={[
                        { value: 40, color: "#10b981", },
                    ]} size={100} strokeWidth={16}
                    centerContent={<div className="text-xl text-gray-910">70%</div>}
                />

            </div>
            <div className="flex items-center space-x-1 mx-4">
                <CircleSmall size={15} fill="#10b981" className="text-[#10b981]" />
                <p className="text-gray-910 text-sm">Students Enrolled - 40%</p>
            </div>
        </div>
    )
}

export default CourseState