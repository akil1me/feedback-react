import { Link } from "react-router-dom";
import FeedBtn from "../button/FeedBtn";
import GoBack from "../go-back/GoBack";

const EditeFeedback = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <GoBack />

      <FeedBtn edit="editBtn" text="Edit Feedback" classs={"addBtn"} ></FeedBtn>
    </div>
  )
}

export default EditeFeedback;