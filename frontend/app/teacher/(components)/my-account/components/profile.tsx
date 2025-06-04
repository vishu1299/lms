import { Image, MoreHorizontal } from "lucide-react"

const Profile = () => {
  return (
    <div className="relative">
       <div className="h-15 w-full rounded-t-lg bg-[#E5E4E4]"></div>

       <div className="flex items-center justify-between px-9 -mt-6">
         <div className="flex items-center space-x-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E5E4E4]">
            <Image />
          </div>

          <div className="mt-8">
            <h1 className="font-medium">Alexa Rawles</h1>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
          </div>
        </div>

         <div className="flex items-center space-x-2 mt-8">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-9 h-9 bg-blue-600 rounded-full"
              >
                <Image />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center w-9 h-9 bg-gray-100 rounded-full text-blue-700">
            <MoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
