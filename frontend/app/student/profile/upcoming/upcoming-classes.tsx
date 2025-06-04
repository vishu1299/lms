import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

 interface upcomingclass{
    badge: string;
    time: string
    title: string;
    avatar: string;
    instructor: string;
    date: string;

}

const ClassesInfo: upcomingclass[] = new Array(6).fill({
        badge: 'Marketing',
        time: '2 hours',
        title: 'Digital Marketing Essentials',
        avatar: '/upcoming/avatar.png',
        instructor: 'Davide Brown',
        date: 'April 21, 2025- 1:00 PM'
})


 const UpcomingClasses = () => {
   return (
     <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 place-items-center gap-7 space-y-4 px-4">
        {ClassesInfo.map((classInfo, index) => (
            <div className="">
                        <Image  src='/upcoming/class.png' alt="class" width={300} height={60} className="rounded" />
                <div className="flex items-center my-2 space-x-5">
                <Badge className="bg-blue-100 text-blue-800">{classInfo.badge}</Badge>
                <h3 className="text-gray-400">{classInfo.time}</h3>
                </div>
                <h1 className="text-gray-500">{classInfo.title}</h1>
                <div className="flex items-center space-x-1 my-2">
                    <Image src={classInfo.avatar} alt="Avatar" width={30} height={30} />
                    <h2 className="text-xs text-gray-400">{classInfo.instructor}</h2>
                </div>
                <div className="flex items-center space-x-1">
                    <Clock3 size={13} />
                    <span className="text-xs text-gray-400">{classInfo.date} </span>
                    <Button size="sm" className="bg-blue-600 ml-2 text-white">Notify Me</Button>
                </div>
             </div>
            ))}
     </div>
   )
 }
 
 export default UpcomingClasses