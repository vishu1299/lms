import React from 'react'
import PostFeedCard from './post-feed-card'

const posts = [
  {
    id: 1,
    user: "JohnDoe",
    avatar: "/profile.png",
    time: "2 hours ago",
    title: "The Future of Web Development: What’s Next?",
    description:
      "As we move into 2024, the landscape of web development continues to evolve. Let’s discuss the emerging trends and technologies that will shape our future.",
    image:
    "/forum/postone.png",
     likes: 324,
    comments: 56,
  },
]

const PostFeedDetails = () => {
  return (
    <div className='w-full'>
            {posts.map((post) => (
        <PostFeedCard key={post.id} {...post} />
      ))}
    </div>
  )
}

export default PostFeedDetails