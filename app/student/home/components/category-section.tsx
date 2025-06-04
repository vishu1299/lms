"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type Category = {
  name: string;
  icon: string;
  path: string;
};

const categories: Category[] = [
  { name: "Home", icon: "/categoryIcons/courses.png", path: "/student/home" },
  {
    name: "Library",
    icon: "/categoryIcons/library.png",
    path: "/student/library",
  },
  { name: "Forum", icon: "/categoryIcons/forum.png", path: "/student/forum" },
  {
    name: "Request Meeting",
    icon: "/categoryIcons/reqmeeting.png",
    path: "/student/meeting",
  },
  {
    name: "Courses",
    icon: "/categoryIcons/courses.png",
    path: "/student/courses",
  },
];

const CategorySection = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 sm:gap-4 lg:justify-between my-12 md:gap-5">
      {categories.map((cat, index) => {
        const isActive = pathname === cat.path;
        return (
          <Link href={cat.path} key={index} className="lg:w-full">
            <Button
              key={index}
              size="sm"
              className={`lg:w-full flex items-center border rounded-3xl ${
                isActive && "bg-blue-510"
              }`}
            >
              <Image src={cat.icon} alt={cat.name} width={20} height={20} />
              <span className={`text-gray-11 ${isActive && "text-white "}`}>
                {cat.name}
              </span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default CategorySection;
