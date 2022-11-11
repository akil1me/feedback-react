
export const AnsCommentItem = ({ ans }) => {
  return (
    <li className="comment-item comment-item2 mb-3">
      <div className="d-flex justify-content-between">
        <img src={ans.img} alt="" width={40} height={40} />
        <div className="ms-4">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="comment-item__name mb-0">{ans.name}</h6>
              <p className="comment-item__username mb-3">{ans.userName}</p>
            </div>

            <a href="#detail" className="comment-item__replay">Replay</a>
          </div>

          <p className="comment-item__comment"><span>{ans.user}</span> {ans.commet}</p>
        </div>
      </div>
    </li>
  )
}

