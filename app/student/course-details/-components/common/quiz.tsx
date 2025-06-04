import { Button } from "@/components/ui/button"

const Quiz = () => {
  return (
    <div className="space-y-3 mb-9">
        <h2 className="font-semibold text-lg">Quiz</h2>
        <p className="text-gray-500 text-xs sm:whitespace-nowrap">Test your knowledge with this week's assessment. Complete all questions to receive your score. </p>
        <Button size="sm" className="bg-blue-500 text-white px-16">Start</Button>
    </div>
  )
}

export default Quiz