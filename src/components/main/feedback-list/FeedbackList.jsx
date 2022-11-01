import { FeedbackItem } from "./feedback-item/FeedbackItem";

import feedList from "../../../data/feedList";

export const FeedbackList = () => {


  return (
    <ul className="list-unstyled">
      {
        feedList.map(item => <FeedbackItem {...item} key={item.mark} />)
      }
    </ul>
  )
}