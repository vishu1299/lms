import React from 'react'
import CourseCard, {CourseCardProps} from './course-card';

const courses: CourseCardProps[] = [
    {
      teacher: "John Thompson",
      education:"PhD in Physics",
      title: "Introduction to Mechanics",
      description: "Leam the fundamerital principles of classical mechanics, including Newion's laws of motion, energy, and momenum.",
      rating: 4.5,
      reviews: 128,
      lessons: 12,
      hours: 6,
      badge: "Popular",
      avatarColor: "bg-blue-100",
      textcolor: "text-blue-600"
    },
    {
      teacher: "Sam Wilson",
      education: "Prulessor of Physics",
      title: "Electricity & Magnetism",
      description: "Explore Ihe fascinaling worid of efecirorugnetic pheromgna and lam about eleciric fields, circuits, and magnelic forces.",
       rating: 4.0,
      reviews: 96,
      lessons: 10,
      hours: 5,
      badge: "New",
      avatarColor: "bg-purple-100",
      textcolor: "text-purple-600",
    },
    {
      teacher: "Rose Martinez",
      education: "Waves & Optics",
      title: "Waves & Optics",
      description: "Explore Ihe fascinaling worid of efecirorugnetic pheromgna and lam about eleciric fields, circuits, and magnelic forces.",
       rating: 5.0,
      reviews: 84,
      lessons: 8,
      hours: 4,
      badge: "",
      avatarColor: "bg-pink-100",
      textcolor: "text-pink-600",
    },
    {
      teacher: "Michael Chen",
      education: "Thepretical Physicist",
      title: "Thermodynamics Basics",
      description: "Understand heal, energy trarsfer, and the laws of themmodynamics wilh practical applications and problems plving.",
      rating: 4.5,
      reviews: 112,
      lessons: 9,
      hours: 4.5,
      badge: "",
      avatarColor: "bg-green-100",
      textcolor: "text-green-600",
    },
    {
      teacher: "Emily Johnson",
      education: "Science Educator",
      title: "Physics for Everyday Life",
      description:  "Discover how physics principles apply to everyday situstions and fechnglogies we encpunier in our daily lives.",
      rating: 4.2,
      reviews: 158,
      lessons: 14,
      hours: 7,
      badge: "Bestseller",
      avatarColor: "bg-orange-100",
      textcolor: "text-orange-600",
    },
    {
      teacher: "David Anderson",
      education: "Experimentzl Physicist",
      title: "Introduction to Modern Physics",
      description: "An asccessible introduction io quantum mechanics,relativily, and glher foundational concepls of modem physics.",
      rating: 4.7,
      reviews: 89,
      lessons: 11,
      hours: 5.5,
      badge: "",
      avatarColor: "bg-red-100",
      textcolor: "text-red-600",
    },
  ];

const CoursesGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
        ))}
    </div>
  )
}

export default CoursesGrid
