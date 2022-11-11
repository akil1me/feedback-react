import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../App";
import icon from "../../../assets/img/icon.svg";
import { FeedBtn } from "../../button/";
import "./addFeedback.scss"

export const AddFeedback = () => {

  const { login } = useContext(AuthContext)

  return (
    <div className="addFeedbeck">
      <div className="addFeedbeck__left-content d-flex align-items-center">
        <img src={icon} alt="icon-me" width={23} height={24} />
        <h4 className="addFeedbeck__title">6 Suggestions</h4>

        <div className="d-flex ms-5 align-items-center">
          <div>
            <span className="addFeedbeck__span">Sort by :</span>
          </div>
          <div>
            <select className="form-select addFeedbeck__select">
              <option value="most-upvotes">Most Upvotes</option>
              <option value="least-upvotes">Least Upvotes</option>
              <option value="most-comments">Most Comments</option>
              <option value="least-comments">Least Comments</option>
            </select>
          </div>
        </div>
      </div>

      <div className="position-relative">
        <Link to={login ? "/suggestions/new-feedback" : "/login"} className="position-absolute top-0 bottom-0 end-0 start-0"></Link>
        <FeedBtn text="+ Add Feedback" classs="addBtn" />
      </div>
    </div>
  )
}