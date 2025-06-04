"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Users, Star, Circle, BookText } from "lucide-react"
import Image from "next/image"

// Course data type
type Course = {
    id: string
    title: string
    category: "Marketing" | "Design" | "Finance"
    image: string
    lessons: number
    hours: number
    students: number
    rating: number
    reviews: number
    instructor: {
        name: string
        avatar: string
    }
}

// Sample course data
const courses: Course[] = [
    {
        id: "1",
        title: "Beginner Adobe Illustrator for Graphic Design",
        category: "Marketing",
        image: "/courses/one.png",
        lessons: 24,
        hours: 45,
        students: 24,
        rating: 4.0,
        reviews: 35,
        instructor: {
            name: "Simmon Brad",
            avatar: "/placeholder.svg?height=40&width=40",
        },
    },
    {
        id: "2",
        title: "Beginner Adobe Illustrator for Graphic Design",
        category: "Design",
        image: "/courses/two.png",
        lessons: 24,
        hours: 45,
        students: 24,
        rating: 4.0,
        reviews: 35,
        instructor: {
            name: "Simmon Brad",
            avatar: "/placeholder.svg?height=40&width=40",
        },
    },
    {
        id: "3",
        title: "Beginner Adobe Illustrator for Graphic Design",
        category: "Finance",
        image: "/courses/three.png",
        lessons: 24,
        hours: 45,
        students: 24,
        rating: 4.0,
        reviews: 35,
        instructor: {
            name: "Simmon Brad",
            avatar: "/placeholder.svg?height=40&width=40",
        },
    },
]

// Category badge color mapping
const categoryColors: Record<Course["category"], string> = {
    Marketing: "bg-[#EAE5FF] text-[#5932EA]",
    Design: "bg-[#C9FFE9] text-[#3DD598]",
    Finance: "bg-[#DEF5FF] text-[#38C3FF]",
}

export default function CoursesList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    )
}

function CourseCard({ course }: { course: Course }) {
    return (
        <div className="rounded-xl">
            <div className="relative aspect-video">
                <Badge className={`absolute top-3 left-3 z-10 px-4 py-2 ${categoryColors[course.category]}`}>{course.category}</Badge>
                <Image src={course.image} alt={course.title} fill className="object-cover rounded-t-xl" />
            </div>
            <div className="py-4 px-2">
                <div className="pb-2">
                    <h3 className="text-lg font-medium">{course.title}</h3>
                </div>
                <div className="pt-0 pb-2">
                    <div className="flex text-xs text-[#6A6A6A] justify-between mb-2">
                        <div className="flex items-center space-x-2">
                            <BookText className="w-4 h-4 text-[#38C3FF]" />
                            <span className="">{course.lessons} lessons</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-[#38C3FF]" />
                            <span>{course.hours} Hours</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-[#38C3FF]" />
                            <span>{course.students} students</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center"> 
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`w-4 h-4 ${star <= Math.floor(course.rating) ? "text-yellow-450 fill-yellow-450" : "text-yellow-450"
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-xs ml-1 font-medium">{course.rating}.0</span>
                        <span className="text-xs text-[#6A6A6A]">({course.reviews} Reviews)</span>
                    </div>
                </div>
                <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                            <AvatarFallback><Circle size={25} className="fill-gray-350 text-gray-350" /></AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{course.instructor.name}</span>
                    </div>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">Enroll Now</Button>
                </div>
            </div>
        </div>
    )
}
