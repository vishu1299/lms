import { Badge } from "@/components/ui/badge";
import {FileSpreadsheet} from "lucide-react";

interface Activity {
  title: string;
  date: string;
  status: string;
  progress: string;
}

const activities: Activity[] = [
  {
    title: "Completed quiz in UiUx Dasign Prineiplos",
    date: "еpтs,2mаalа 1 нн",
    status: "",
    progress: "92%",
  },
  {
    title: "Wasched losson in Modem JavaSeriot Fundamentals",
    date: "Арв,ашынl 1о.ь нн",
    status: "In Progress",
    progress: "",
  },
  {
    title: "Surmlted assgnment in Roact Hooks MasterCha",
    date: "Apri 7, 2025al 4451%",
    status: "",
    progress: "88%",
  },
  {
    title: "Started courso Mobilo Doveloprent",
    date: "Apti 10. 2025 al9:00 AM",
    status: "Jrd Started",
    progress: "",
  },
];

export default function RecentActivities() {


  return (
    <div className="p-6 space-y-4 shadow">
      <h2 className="text-xl font-semibold">Recent Activities</h2>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-lg p-4 flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <FileSpreadsheet className="h-6 w-6 text-blue-500 " />
              <div className="text-gray-400">
              <p className="text-sm">{activity.title}</p>
              <p className="text-xs">{activity.date}</p>
            </div>
            </div>
            {activity.status && (
              <Badge className="text-xs bg-yellow-200 rounded-full border-none" variant="outline">
                {activity.status}
              </Badge>
            )}
            {activity.progress && ( 
              <div className="flex items-center space-x-2">
                 <span className="text-sm font-semibold">{activity.progress}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
