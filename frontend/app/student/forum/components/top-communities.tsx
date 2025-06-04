import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";

interface Community {
  name: string;
  members: string;
}

const topCommunities: Community[] = [
  { name: "TechTalks", members: "2.1M" },
  { name: "DigitalArt", members: "1.8M" },
  { name: "GameDev", members: "1.5M" },
];

const TopCommunities = () => {
  return (
    <div className="bg-white p-4 rounded-xl mb-6">
      <h3 className="text-lg mb-4">Top Forums</h3>
      <ul className="space-y-4">
        {topCommunities.map((com, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="pr-3">{idx + 1}</p>
              {/* <Circle color="gray-300" className="text-gray-300" /> */}
              <div className="rounded-full bg-orange-100 w-8 h-8 "></div>
              <p className="text-gray-500 pl-2 flex flex-col">
                <span>{com.name}</span>
                <span>{com.members} members</span>
              </p>
            </div>
            <Button
              size="sm"
              className="bg-blue-800 rounded-xl text-white sm:px-4"
              variant="outline"
            >
              Join
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCommunities;
