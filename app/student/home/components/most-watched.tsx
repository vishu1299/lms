import Image from "next/image"
import { Eye, Clock3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Video = {
    title: string;
    category: string;
    views: string;
    duration: string;
    image: string;
}

const mostWatched: Video[] = new Array(3).fill({
    title: "UI/UX Design Principles",
    category: "Design",
    views: "8.5k views",
    duration: "2h 30m",
    image: "/mostwatched.png"
})

const MostWatched = () => {
    return (
        <div>
            <h2 className="text-2xl my-6">Most Watched</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5">
                {mostWatched.map((video, index) => (
                    <div key={index} >
                        <Image src={video.image} alt={video.title} width={240} height={136} className="rounded-lg" />
                        <div className="mt-2">
                            <Badge variant="secondary" className="text-gray-500">{video.category}</Badge>
                            <h3 className="mt-[5px]">{video.title}</h3>
                            <div className="flex items-center text-xs text-gray-500 gap-3 mt-2">
                                <span className="flex items-center gap-1">
                                    <Eye size={14} />
                                    {video.views}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock3 size={14} />
                                    {video.duration}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MostWatched