import { useContext } from "react";
import { AppContext } from "../../../App";
import { FeedbackItem } from "./feedback-item/FeedbackItem";

export const FeedbackList = () => {

  const { feedbackList } = useContext(AppContext)

  return (
    <ul className="list-unstyled">
      {
        feedbackList.map(item => <FeedbackItem {...item} key={item.mark} />)
      }
    </ul>
  )
}