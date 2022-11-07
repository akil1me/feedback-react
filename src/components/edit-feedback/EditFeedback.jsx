import { Link } from "react-router-dom";
import FeedBtn from "../button/FeedBtn";
import GoBack from "../go-back/GoBack";

const EditeFeedback = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <GoBack />

      <div className="position-relative">
        <Link className="position-absolute top-0 bottom-0 end-0 start-0" to="edite-feedback"></Link>
        <FeedBtn edit="editBtn" text="Edit Feedback" classs={"addBtn"} ></FeedBtn>
      </div>
    </div>
  )
}

export default EditeFeedback;