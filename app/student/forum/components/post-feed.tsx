import PostCard from "./post-card"

const posts = [
  {
    id: 1,
    user: "JohnDoe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "2 hours ago",
    title: "The Future of Web Development: What’s Next?",
    description:
      "As we move into 2024, the landscape of web development continues to evolve. Let’s discuss the emerging trends and technologies that will shape our future.",
    image:
    "/forum/postone.png",
     likes: 324,
    comments: 56,
  },
  {
    id: 2,
    user: "TechEnthusiast",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    time: "5 hours ago",
    title: "Best Practices for Modern UI Design",
    description:
      "A comprehensive guide to creating intuitive and aesthetically pleasing user interfaces in 2024. Share your thoughts and experiences!",
    image: "",
    likes: 256,
    comments: 43,
  },
  {
    id: 3,
    user: "JohnDoe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "2 hours ago",
    title: "The Future of Web Development: What’s Next?",
    description:
      "Let’s discuss the emerging trends and technologies that will shape our future.",
    image:
       "/forum/posttwo.png",
    likes: 324,
    comments: 56,
  },
]

const PostFeed = () => {
  return (
    <div className="w-full">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}

export default PostFeed
