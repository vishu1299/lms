import FormDiscussion from "../common/form-discussion"
import Quiz from "../common/quiz"
import StreamResources from "./stream-resources"
import LiveStream from "./live-stream"
import LiveChat from "./live-chat"

const Live = () => {
  return (
    <div className="space-y-9 mt-4">
      <LiveStream />
      <LiveChat />
      <FormDiscussion />
      <StreamResources />
      <Quiz />
    </div>
  )
}

export default Live