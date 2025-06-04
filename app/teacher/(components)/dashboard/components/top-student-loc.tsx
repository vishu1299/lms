import { Image, Users } from "lucide-react"

type StudentLocation = {
  country: string
  count: number
  percentage: number
}

const studentData: StudentLocation[] = [
  { country: "Indonesia", count: 3551, percentage: 30 },
  { country: "Vietnam", count: 2951, percentage: 20 },
  { country: "United States", count: 2125, percentage: 15 },
]

export default function TopStudentLocation() {
  return (
    < div className="w-full border-none text-gray-910">
      < div className="pb-2">
        < div className="text-lg font-medium">Top Student Location</ div>
      </ div>
      <div className="space-y-4">
        {studentData.map((location) => (
          <div key={location.country} className="h-7 flex justify-between space-x-4">
            <div className="h-full bg-gradient-to-r from-white to-[#CCEABB] rounded-md flex items-center justify-between min-w-fit pr-3 space-x-3"
              style={{ width: `${location.percentage * 3}%`, maxWidth:"100%" }} >
              <div className="flex items-center gap-2">
                  <Image size={14}  />
                <span className="text-[10px] whitespace-nowrap">{location.country}</span>
              </div>
              <div className="flex items-center gap-1">
                  <Users className="h-2 w-3" />
                  <span className="text-[8px] font-medium">{location.count.toLocaleString()}</span>
                </div>
            </div>
               <div className="h-full flex items-center">
                <span className="text-[10px] text-gray-910/40">{location.percentage}%</span>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}