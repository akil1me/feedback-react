
import { FeedbackItem } from "../main/feedback-list/feedback-item/FeedbackItem";


const EditeFeedbackList = ({ feedBackList }) => {


  return (
    <>
      <ul className="list-unstyled">
        <FeedbackItem  {...feedBackList} />
      </ul>

    </>
  )
}

export default EditeFeedbackList;