import { CommentsList } from "./comments-list/";

import "./coments.scss";

import notfound from "../../assets/img/not-found.png";

export const Comments = ({ num = 0 }) => {
  return (
    <div className="comments card mt-4 py-3 px-4">
      <div>
        <h2 className="comments__title">Comments</h2>
        {
          <CommentsList />

        }
      </div>
    </div>
  )
}
