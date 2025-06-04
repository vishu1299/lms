import Image from "next/image"
import {
  Mail,
  MapPin,
  IdCard,
  CalendarPlus2,
  PencilLine,
  MailCheck,
} from "lucide-react"

interface User {
  name: string
  role: string
  dob: string
  id: string
  address: string
  email: string
  avatar: string
  banner: string
}

const user: User = {
  name: "Charlie Richard",
  role: "Graphic Designer, UI Designer",
  dob: "14/09/1998",
  id: "123456789012",
  address: "7290 U.S. 43 Street, Guin City, Alaska",
  email: "MrSatan123@gmail.com",
  avatar: "/upcoming/avatar.png",
  banner: "/upcoming/background.png",
}

interface Userinfo {
  icon: React.ElementType;
  label: string;
  value: string;
  iconSize?: number;
}




const UserProfile = () => {
  return (
    <div className="rounded-xl bg-white">
      {/* Banner */}
      <div className="relative h-40 w-full">
        <Image
          src={user.banner}
          alt="Banner"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <Image
            src={user.avatar}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-12 px-5 pb-5 text-center">
        {/* Name and Role */}
        <h2 className="font-semibold text-md text-gray-800">{user.name}</h2>


        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>
              <span className="text-gray-500 font-thin">Mail: </span><span className="">MrSatan123@hmail.com</span>
            </span>
          </div>
          <PencilLine size={16} className="cursor-pointer" />

        </div>




      </div>
    </div>
  )
}

export default UserProfile
