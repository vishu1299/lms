import CurrentVideo from "../common/current-video"
import FormDiscussion from "../common/form-discussion"
import Quiz from "../common/quiz"
import Document from "./document"

const Video = () => {
  return (
       <div className="">
        <CurrentVideo />
        <FormDiscussion />
        <Document />
        <Quiz />
      </div>
  )
}

export default Video