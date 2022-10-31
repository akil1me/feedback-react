import { FeedbackItem } from "../main/feedback-list/feedback-item/FeedbackItem";

const EditeFeedback = () => {

  const feedbackList =
  {
    title: "Add a dark theme option",
    text: "It would help people with light sensitivities and who prefer dark mode.",
    mark: 99,
    num: 4,
    btn: "Feature",
  }

  return (
    <>
      <FeedbackItem  {...feedbackList} />
    </>
  )
}

export default EditeFeedback;