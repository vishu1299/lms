 
const guidelines: string[] = [
  "Be respectful and kind",
  "No spam or self-promotion",
  "keep discussions on topic",
  "Follow forum rules",
]

const CommunityGuidelines = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="text-md mb-4">Guidelines</h3>
      <ul className="space-y-2 text-sm text-gray-2">
        {guidelines.map((rule, idx) => (
          <li key={idx}>{rule}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default CommunityGuidelines