import AnsCommentItem from "./AnsCommentItem";
import "./commentItem.scss"

const CommentsItem = (props) => {

  return (
    <li className="comment-item">
      <div className="d-flex justify-content-between">
        <img src={props.img} alt="" width={40} height={40} />
        <div className="ms-4">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="comment-item__name mb-0">{props.name}</h6>
              <p className="comment-item__username mb-3">{props.userName}</p>
            </div>

            <a href="#detail" className="comment-item__replay">Replay</a>
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

export default CommentsItem;