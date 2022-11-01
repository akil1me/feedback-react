import FeedBtn from "../button/FeedBtn";
import "./addComment.scss"

const AddComment = () => {
  return (
    <div className="add-coment card p-4 mt-4 mb-3">
      <div>
        <h5 className="add-coment__title">Add Comment</h5>

        <form autoComplete="off">
          <textarea className="add-coment__textarea" placeholder="Type your comment here"></textarea>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="add-coment__span">250 Characters left</span>
            <FeedBtn text="Post Comment" classs="addBtn" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddComment;