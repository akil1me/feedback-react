import { CommentsItem } from "../commentsItem/"


import commets from "../../../data/comments"

export const CommentsList = () => {
  return (
    <ul className="mt-5">
      {
        commets.map(comment => <CommentsItem key={comment.name} {...comment} />)
      }
    </ul>
  )
}
