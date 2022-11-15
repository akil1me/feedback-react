import { AnsCommentItem } from "./";

import "./commentItem.scss"

export const CommentsItem = (props) => {

  return (
    <li className="comment-item">
      <div className="d-flex">
        <img className="rounded" src={props.img} alt={props.name} width={40} height={40} />
        <div className="ms-4">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="comment-item__name mb-0">{props.name}</h6>
              <p className="comment-item__username mb-3">{props.userName}</p>
            </div>
          </div>

          <p className="comment-item__comment">{props.commet}</p>
        </div>
      </div>

      <ul className="comment-item__list ms-3">
        {
          props.ansver.map(ans => <AnsCommentItem key={ans.name} ans={ans} />)
        }
      </ul>
    </li>
  )
}
