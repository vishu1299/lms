import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";

const Reviews = () => {
    return (
        <div>
            <h2 className="text-lg font-medium mb-4">Our students says about this course</h2>

            <div className=" rounded-md mb-6">
                <div className="flex flex-col md:flex-row md:space-x-2">
                    <div className="flex flex-col items-center md:w-1/4 mb-6 md:mb-0 bg-[#F8F8FD] px-8 py-4">
                        <span className="text-3xl font-bold">5</span>
                        <div className="flex my-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={12} fill="#FFA404" className="text-[#FFA404]" />
                            ))}
                        </div>
                        <span className="text-gray-600 text-xs">12 Reviews</span>
                    </div>

                    <div className="md:w-3/4 bg-[#F8F8FD] px-8 py-4">
                        <RatingBar label="Excellent" percentage={100} />
                        <RatingBar label="Very Good" percentage={20} />
                        <RatingBar label="Average" percentage={10} />
                        <RatingBar label="Poor" percentage={0} />
                        <RatingBar label="Terrible" percentage={0} />
                    </div>
                </div>
            </div>


            <div className="space-y-6">
                <ReviewItem
                    name="Jovanca Beby"
                    initials="JB"
                    avatarColor="bg-[#B52472]"
                    date="Sep 2, 2021"
                    rating={5}
                    comment="Quisque et quam lacus amet. Tincidunt auctor phasellus purus faucibus lectus mattis."
                />

                <ReviewItem
                    name="Rakabuming Suhu"
                    initials="RS"
                    avatarColor="bg-[#E5E7ED]"
                    date="Sep 2, 2021"
                    rating={5}
                    comment="Quisque et quam lacus amet. Tincidunt auctor phasellus purus faucibus lectus mattis."
                />

                <div className="flex justify-center my-8">
                    <Button variant="link" className="text-[#3247E6]">
                        More reviews
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default Reviews

function RatingBar({ label, percentage }: { label: string; percentage: number }) {
    return (
        <div className="flex items-center space-x-4 mb-2">
            <span className="w-20 text-xs">{label}</span>
            <div className="bg-[#E1E1EE] rounded h-2 flex-1">
                <Progress
                    className="h-2 bg-[#3247E6] shadow-sm "
                    style={{ width: `${percentage}%` }}
                />

            </div>
            <span className="w-5 text-xs">{percentage}%</span>
        </div>
    )
}

function ReviewItem({
    name,
    initials,
    avatarColor,
    date,
    rating,
    comment,
}: {
    name: string
    initials: string
    avatarColor: string
    date: string
    rating: number
    comment: string
}) {
    return (
        <div>
            <div className="flex items-center mb-2">
                <div className="flex items-center space-x-3">
                    <Avatar className={`h-12 w-12 ${avatarColor} text-white`}>
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <div className="space-x-8">
                            <span className="font-medium text-sm">{name}</span>
                            <span className="text-sm text-gray-500">{date}</span>
                        </div>
                        <div className="flex mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={12}
                                    fill={star <= rating ? "#FFA404" : "#E1E1EE"}
                                    className="text-[#FFA404]"
                                />

                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <p className="text-sm">{comment}</p>
            </div>
        </div>
    )
}