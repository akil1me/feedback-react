
import "./editeFeedbackMain.scss"

import editeFeedBackImg from "../../assets/img/edite-feedback.svg";
import EditeFeedBackForm from "../edite-feedback-form/EditeFeedBackForm";

export default function EditeFeedBackMain({ title, id, text, btn }) {

  return (
    <div className="edite-feedback-main">
      <img className="edite-feedback-main__img" src={editeFeedBackImg} alt="+" width={56} height={56} />

      <h3 className="edite-feedback-main__title">Editing '{title}'</h3>

      <EditeFeedBackForm id={id} title={title} text={text} btn={btn} />

    </div>
  )
}