import { Check } from "lucide-react"

const learningItems = [
  "Critical Thinking",
  "User Experience Research",
  "History of Digital Product Design",
  "How Human Perception Works",
  "Usability Testing",
  "User Interface Design",
  "Some Relevant Design History",
  "Design Processes",
  "Increased Creativity",
  "Applied Psychology in Design"
]

const WhatYoullLearn = () => {
  return (
    <div className="rounded-xl border border-gray-10 mx-auto w-full p-5">
      <h2 className="text-lg font-semibold mb-6 text-gray-950">What you'll learn</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10">
        {learningItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-2">
            <Check className="text-green-500 mt-1" size={18} />
            <p className="text-gray-910 text-sm">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatYoullLearn
