import { Star } from "lucide-react";

interface Course {
  bgcolor: string;
  title: string;
  enrolled: number;
  rating: number;
}

const courses: Course[] = [
  {
    bgcolor: "bg-gray-910",
    title: "UI/UX Prototyping with Proto.io",
    enrolled: 10,
    rating: 4.5
  },
  {
    bgcolor: "bg-emerald-600",
    title: "How to Make UX Case Study for Beginner",
    enrolled: 32,
    rating: 4.5
  },
  {
    bgcolor: "bg-blue-700",
    title: "How to Conduct User Research from Scratch",
    enrolled: 12,
    rating: 4.5
  }
];

const WeeklyStats = () => {
  return (
    <div className="bg-white p-4 rounded-xl text-gray-910">
      <h1 className="text-lg font-semibold mb-4">Weekly Sales Stats</h1>
      <div>
         <div className="text-gray-910/50 flex justify-between items-center bg-gray-40 p-3 rounded-md mb-2">
          <p className="text-sm ">Course</p>
          <div className="flex gap-8 text-sm">
            <p>Enrolled</p>
            <p>Ratings</p>
          </div>
        </div>

         {courses.map((course, idx) => (
          <div key={idx} className="flex justify-between items-center p-3">
            <div className="flex items-center gap-3">
               <div className={`p-4 rounded ${course.bgcolor}`} />
              <h3 className="text-xs font-medium max-w-[150px]">{course.title}</h3>
            </div>
            <div className="flex items-center gap-14">
              <p className="text-sm">{course.enrolled}</p>
              <p className="flex items-center text-sm">
                {course.rating}
                <Star size={14} fill="#FACC15" color="#FACC15" className="ml-1" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyStats;
