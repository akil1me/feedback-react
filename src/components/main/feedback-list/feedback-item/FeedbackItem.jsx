import Button from "../../../button/Button";

import sms from "../../../../assets/img/sms.png"

import "./feedbackItem.scss";


export const FeedbackItem = (props) => {
  return (
    <li className="feed-item">
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
              {props.num}
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}
