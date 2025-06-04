import { Badge } from "@/components/ui/badge"

interface SubmissionItem {
  title: string
  date: string
  status: string
}

export function LastSubmitted() {
  const submissions: SubmissionItem[] = [
    {
      title: "How to Design a Logotype",
      date: "Aug 21, 2021",
      status: "PUBLISHED",
    },
    {
      title: "Adobe Illustrator Masterclass",
      date: "Aug 17, 2021",
      status: "PUBLISHED",
    },
  ]

  return (
    <div className="felx flex-col space-y-4">
      <h2 className=" font-semibold text-lg text-[#3F3F44]">Last Submitted</h2>
      <div className="space-y-4">
        {submissions.map((submission, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="text-sm">
            <h3 className="font-medium text-[#3F3F44]">{submission.title}</h3>
              <p className="text-[#3F3F44]/50">{submission.date}</p>
              </div>
              <Badge variant="outline" className="bg-lime-50 text-emerald-400 border-none">
                {submission.status}
              </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
