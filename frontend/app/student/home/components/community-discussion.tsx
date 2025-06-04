import { MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

type Discussion = {
  title: string;
  author: string;
  time: string;
  replies: number;
  views: string;
};

const CommunityDiscussions = () => {
  const discussions: Discussion[] = [
    {
      title: "Best practices for React hooks implementation?",
      author: "John Doe",
      time: "2 hours ago",
      replies: 24,
      views: "1.2k",
    },
    {
      title: "Best practices for React hooks implementation?",
      author: "John Doe",
      time: "2 hours ago",
      replies: 24,
      views: "1.2k",
    },
    {
      title: "Best practices for React hooks implementation?",
      author: "John Doe",
      time: "2 hours ago",
      replies: 24,
      views: "1.2k",
    },
  ];

  return (
    <section className="flex items-center justify-center my-12">
      <div className="w-[70%] mx-4 sm:mx-8 lg:mx-12">
        <div className="flex justify-between items-center  mb-4">
          <h2 className="text-xl sm:text-2xl">Community Discussions</h2>
          <Button size="sm" className="text-sm bg-blue-500 text-white">
            Join Discussion
          </Button>
        </div>
        <div className="space-y-4 ">
          {discussions.map((discussion, index) => (
            <div key={index} className="rounded bg-gray-100 p-2">
              <h3 className="text-gray-900 p-2">{discussion.title}</h3>
              <div className="text-xs text-gray-600 px-9 flex flex-wrap items-center gap-4 py-2">
                <span>{discussion.author}</span>
                <span>{discussion.time}</span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  {discussion.replies} replies
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  {discussion.views} views
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityDiscussions;
