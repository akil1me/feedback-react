import CommentsItem from "../commentsItem/CommentsItem";

import commets from "../../../data/comments"

const CommentsList = () => {
  return (
    <ul className="mt-5">
      {
        commets.map(comment => <CommentsItem key={comment.name} {...comment} />)
      }
    </ul>
  )
}

export default CommentsList;