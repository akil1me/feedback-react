import { Link } from "react-router-dom";

import { Button } from "../../../button/";

//images
import sms from "../../../../assets/img/sms.png"

//scss
import "./feedbackItem.scss";


export const FeedbackItem = (props) => {
  return (
    <li className="feed-item position-relative">
      <Link to={`/detail/${props.id}`} className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
      <div className="row">
        <div className="col-1 p-0">
          <button className="feed-item__mark d-flex flex-column align-items-center">
            <span className="feed-item__mark-span1">‸</span>
            <span className="feed-item__mark-span2">{props.mark}</span>
          </button>
        </div>

        <div className="col-11 p-0 d-flex justify-content-between align-items-center">
          <div>
            <h5 className="feed-item__title">{props.title}</h5>
            <p className="feed-item__text">{props.text}</p>

            <Button text={props.btn} />
          </div>

          <div className="d-flex align-items-center">
            <button className="btn">
              <img src={sms} alt="sms" />
            </button>
            <span className="feed-item__num">
              {props.comments.length}
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}
