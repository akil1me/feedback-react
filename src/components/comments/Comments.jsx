import CommentsList from "./comments-list/ComeentsList";
import "./coments.scss"

const Comments = () => {
  return (
    <div className="comments card mt-4 py-3 px-4">
      <div>
        <h2 className="comments__title">4 Comments</h2>
        <CommentsList />
      </div>
    </div>
  )
}

export default Comments;