import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";

interface forum {
  name: string;
  likes: string;
}

const topForums: forum[] = [
  { name: "TechTalks", likes: "2.1K" },
  { name: "DigitalArt", likes: "1.8K" },
  { name: "GameDev", likes: "1.5K" },
];

const TopForums = () => {
  return (
    <div className="bg-white p-4 rounded-xl mb-6 shadow-sm">
      <h3 className="text-md mb-4">Top Forums</h3>
      <ul className="space-y-4">
        {topForums.map((forum, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="pr-3 text-gray-2 text-sm">{idx + 1}</p>
              <div className="rounded-full bg-[#D9D9D9] w-6 h-6 " />
              <p className="pl-2 flex flex-col text-sm">
                <span>{forum.name}</span>
                <span className="text-gray-2 text-xs">{forum.likes} Likes</span>
              </p>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopForums;
