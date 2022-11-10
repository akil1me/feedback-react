import { AddFeedback } from "./add-feedback/AddFeedback"
import { FeedbackList } from "./feedback-list/FeedbackList"
import "./main.scss"

export const Main = () => {
  console.log("aaa");
  return (
    <>
      <AddFeedback />
      <FeedbackList />
    </>
  )
}