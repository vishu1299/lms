import { ChevronDown, ChevronUp, CheckCircle, CirclePlay, CircleCheck } from 'lucide-react'
import { useState } from 'react'

const Lessons = () => {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        "Section 1 - Introductions": true,
        "Section 2 - Let's started": false,
    })

    const toggleSection = (section: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    return (
        <div>
            <h2 className="font-medium mb-4">Lessons</h2>

            {/* Section 1 */}
            <div className="mb-4 border border-gray-100 rounded-md overflow-hidden">
                <div
                    className="flex items-center justify-between bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection("Section 1 - Introductions")}
                >
                    <h3 className="text-sm text-[#838383] font-medium mb-4">Section 1 - Introductions</h3>
                    {expandedSections["Section 1 - Introductions"] ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                </div>

                {expandedSections["Section 1 - Introductions"] && (
                    <div className="divide-y divide-gray-100 space-y-4">
                        <LessonItem number="01" title="Introducing to The Class" duration="10min 34s" completed={true} />
                        <LessonItem number="02" title="Introducing to The Class" duration="10min 34s" completed={false} />
                        <LessonItem number="03" title="Introducing to The Class" duration="10min 34s" completed={false} />
                        <LessonItem number="04" title="Introducing to The Class" duration="10min 34s" completed={false} />
                    </div>
                )}
            </div>

            {/* Section 2 */}
            <div className="mb-4 border border-gray-100 rounded-md overflow-hidden">
                <div
                    className="flex items-center justify-between bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection("Section 2 - Let's started")}
                >
                    <h3 className="text-sm text-[#838383] font-medium">Section 2 - Let's started</h3>
                    {expandedSections["Section 2 - Let's started"] ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                </div>

                {expandedSections["Section 2 - Let's started"] && (
                    <div className="divide-y divide-gray-100">
                        <LessonItem number="05" title="Getting Started with Basics" duration="15min 20s" completed={false} />
                        <LessonItem number="06" title="Understanding Core Concepts" duration="12min 45s" completed={false} />
                    </div>
                )}
            </div>

            {/* Duplicate Section 2 as shown in the image */}
            <div className="mb-4 border border-gray-100 rounded-md overflow-hidden">
                <div
                    className="flex items-center justify-between bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection("Section 2 - Let's started (2)")}
                >
                    <h3 className="text-sm text-[#838383] font-medium">Section 2 - Let's started</h3>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
            </div>

        </div>
    )
}

export default Lessons

function LessonItem({
    number,
    title,
    duration,
    completed,
}: {
    number: string
    title: string
    duration: string
    completed: boolean
}) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <span className="font-medium w-6">{number}</span>
                <div>
                    <h4 className="text-sm font-medium">{title}</h4>
                    <span className="text-xs text-gray-500">{duration}</span>
                </div>
            </div>
            {completed ? <CircleCheck className="h-6 w-6 text-blue-500" /> : <CirclePlay className="h-6 w-6 text-gray-300" />}
        </div>
    )
}