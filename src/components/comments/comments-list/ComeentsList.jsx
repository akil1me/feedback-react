import { AppContext } from "../../../App";
import { useContext } from "react";

import { CommentsItem } from "../commentsItem/"
import { useParams } from "react-router-dom";

import notfound from "../../../assets/img/not-found.png"

export const CommentsList = () => {
  const { id } = useParams();

  const { comments, feedbackList } = useContext(AppContext)

  const feedBackList = feedbackList.find(item => item.id === +id);

  return (
    <ul className="mt-5" data-id={id}>
      {
        comments.length !== 0 ? comments.map(comment => <CommentsItem key={comment.name} {...comment} />) :
          <div className="text-center">
            <img src={notfound} alt="notfound" width={130} height={136} />
          </div>
      }
    </ul>
  )
}
