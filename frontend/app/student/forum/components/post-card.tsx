import { Heart, MessageCircle, Share2, Ellipsis, Bookmark } from "lucide-react"

interface Post {
  id: number
  user: string
  avatar: string
  time: string
  title: string
  description: string
  image: string
  likes: number
  comments: number
}

const PostCard = ({
  user,
  avatar,
  time,
  title,
  description,
  image,
  likes,
  comments,
}: Post) => {
  return (
    <div className="bg-white rounded-xl mb-6 p-4">
      <div className="flex items-center gap-3 mb-2">
        <img src={avatar} alt={user} className="w-8 h-8 rounded-full" />
        <div>
          <p className="text-sm font-medium">{user}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>

      <h2 className="font-semibold text-lg mb-1">{title}</h2>
      <p className="text-sm text-gray-700 mb-3">{description}</p>

      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-auto max-h-[350px] object-cover mb-3"
        />
      )}

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-1">
            <Bookmark className="w-4 h-4" />
            <span>Save</span>
          </div>
        </div>
        <Ellipsis className="w-4 h-4" />
      </div>
    </div>
  )
}

export default PostCard
