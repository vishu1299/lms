 import { Play } from 'lucide-react'
interface GuideItem {
  title: string
}

export default function QuizGuideSection() {
    const guides: GuideItem[] = [
      {
        title: "How to Upload Your Quiz Correctly",
      },
      {
        title: "The Complete Way to Organize Your Quiz Content",
      },
      {
        title: "How to Add More Quiz on Your Course",
      },
    ];
  
    return (
      <div className="space-y-4 p-4 rounded-md">
        <h2 className="text-lg font-semibold text-gray-910">Guides</h2>
        <div className="flex flex-col space-y-3">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl w-full flex items-center gap-4 px-4 py-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-910 shrink-0">
                <Play className="h-4 w-4 fill-blue-600 text-blue-600" />
              </div>
              <p className="text-sm text-gray-910 font-medium">{guide.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  