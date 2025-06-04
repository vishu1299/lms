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

const trendingVideos: Video[] = new Array(6).fill({
    title: "Modern Javascript Fundamentals",
    category: "Development",
    views: "4.2k views",
    duration: "1h 15m",
    image: "/trendingnow.png"
})

const TrendingNow = () => {
    return (
        <div className="">
            <h2 className=" text-lg mb-4">Trending Now</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-5" >
                {trendingVideos.map((video, index) => (
                    <div key={index}>
                        <Image src={video.image} alt={video.title} width={240} height={40} className="rounded-lg" />
                        <div className="mt-2">
                            <Badge className="text-blue-700 bg-blue-100">{video.category}</Badge>
                            <h3 className="max-w-[10rem] mt-[5px]">{video.title}</h3>
                            <div className="flex items-center text-xs text-gray-600 gap-3 mt-2">
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

export default TrendingNow