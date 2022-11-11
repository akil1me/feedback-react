
import "./newFeedBackMAin.scss"

import NewFeedBackForm from "../new-feedback-form/NewFeedBackForm"

export default function NewFeedBackMain({ newFeedBackImg, editeFeedBackImg, title, link = {}, onSubmit, hendleDeleteFeedback }) {

  const defaultValueInput = link.title;
  const defaultValueText = link.text;
  const defaultValueSelect = link.btn;


  return (
    <div className="new-feedback-main">
      <img className="new-feedback-main__img" src={newFeedBackImg || editeFeedBackImg} alt="+" width={56} height={56} />

      <h3 className="new-feedback-main__title">{title}</h3>

      <NewFeedBackForm
        onSubmit={onSubmit}
        defaultValueInput={defaultValueInput}
        defaultValueText={defaultValueText}
        defaultValueSelect={defaultValueSelect}
        hendleDeleteFeedback={hendleDeleteFeedback} />
    </div>
  )
}
