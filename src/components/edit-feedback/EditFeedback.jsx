import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import { FeedBtn } from "../button/";
import GoBack from "../go-back/GoBack";

export const EditeFeedback = () => {

  const { login } = useContext(AuthContext)

  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <GoBack />

      <div className="position-relative">
        <Link className="position-absolute top-0 bottom-0 end-0 start-0" to={login ? "edite-feedback" : "/login"}></Link>
        <FeedBtn edit="editBtn" text="Edit Feedback" classs={"addBtn"} ></FeedBtn>
      </div>
    </div>
  )
}

