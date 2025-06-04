import {
    BookOpen,
    Download,
    MonitorPlay,
  } from 'lucide-react'
  import Image from 'next/image'
  
  const CourseSidebar = () => {
    return (
      <div className="border rounded-xl p-4 w-full max-w-sm border-gray-10 pb-[6rem]">
         <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
          <Image
            src="/teacher/coursethumbnail.png"
            alt="Course Thumbnail"
            fill
            className="object-cover"
          />
        </div>
  
         <h3 className="text-lg font-semibold mb-4 text-gray-950">This course includes:</h3>
  
         <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <MonitorPlay strokeWidth={3} size={18} className='text-gray-20' />
            <span className='text-zinc-750'>15.5 hours on-demand video</span>
          </li>
          <li className="flex items-center gap-2">
            <Download strokeWidth={3} size={18} className='text-gray-20' />
            <span className='text-zinc-750'>26 downloadable resources</span>
          </li>
          <li className="flex items-center gap-2">
            <BookOpen strokeWidth={3} size={18} className='text-gray-20' />
            <span className='text-zinc-750'>Certificate of completion</span>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CourseSidebar
  