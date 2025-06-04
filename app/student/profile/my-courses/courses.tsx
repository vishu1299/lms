import { Badge } from "@/components/ui/badge"
import CircularProgress from "@/components/ui/circular-progress"
import { EllipsisVertical, Palette, Atom, Smartphone } from "lucide-react"

interface Course {
    icon: React.ElementType
    title: string
    objective: string
    category: string
    status: string
    progress: number
    compHrs: string
    score: string
    quizScore: string
    lastUsed: string
}

const courses: Course[] = [
    {
        icon: Palette,
        title: "Advanced C.SS",
        objective: "Techriques",
        category: "Developaend",
        status: "Campleled",
        progress: 100,
        compHrs: "12 of 12 he%prts",
        score: "95%",
        quizScore: "Qutc Scrte",
        lastUsed: "Lied sc32naed: Apn 2, 202%",
    },
    {
        icon: Atom,
        title: "React Hooks",
        objective: "Masterclass",
        category: "Dereelpmni",
        status: "In Progress",
        progress: 50,
        compHrs: "8 of 16hcorora",
        score: "95%",
        quizScore: "Quiz Sccte",
        lastUsed: "Laod acssoraed Apn ( , 2095",
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        objective: "",
        category: "Devkoptend",
        status: "Juod Slarled",
        progress: 10,
        compHrs: "2 ol 18 hoorsto",
        score: "95%",
        quizScore: "Quz Socr",
        lastUsed: "Laad wooe%%ndt Aprl 10. 2025",
    }

]

export default function Courses() {


    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-4 px-4 ">
                {courses.map((course, index) => {
                    const Icon = course.icon
                    return (
                        <div key={index} className="border border-gray-200 rounded p-4 ">
                            <div className="space-y-4">
                                <div className="flex justify-between items-between space-x-4">
                                    <div className="flex space-x-4 justify-center items-start">
                                        <div className="pt-3">
                                            <Icon size={24} />
                                        </div>
                                        <div className="text-gray-500">
                                            <h3 className="text-black text-lg whitespace-nowrap font-medium">{course.title}</h3>
                                            <p>{course.objective}</p>
                                            <p className="">{course.category}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <EllipsisVertical size={32} />
                                    </div>  
                                  </div>
                                <div className="flex space-x-4 mt-4">
                                    <CircularProgress value={course.progress} size={50} />
                                    <div className="flex flex-col">
                                        <span>Progress</span>
                                        <span className="text-gray-500 text-sm">{course.compHrs}</span>
                                    </div>
                                    <div className="flex flex-col ml-auto">
                                        <span>{course.score}</span>
                                        <span className="text-gray-500 text-sm">{course.quizScore}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <Badge className={`${
                                        course.status === "Campleled"
                                            ? "bg-green-300 text-white"
                                            :  "bg-yellow-400 text-white"
                                    } text-xs px-1 rounded-full`} >{course.status}</Badge>
                                    <p className="text-xs whitespace-nowrap text-gray-400">{course.lastUsed}</p>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
