
import "./newFeedBackMAin.scss"

import newFeedBackImg from "../../assets/img/new-feedback.svg"
import NewFeedBackForm from "../new-feedback-form/NewFeedBackForm"

export default function NewFeedBackMain() {

  return (
    <div className="new-feedback-main">
      <img className="new-feedback-main__img" src={newFeedBackImg} alt="+" width={56} height={56} />

      <h3 className="new-feedback-main__title">Create New Feedback</h3>

      <NewFeedBackForm />

    </div>
  )
}
