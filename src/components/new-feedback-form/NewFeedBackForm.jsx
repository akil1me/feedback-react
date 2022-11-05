import { Link } from "react-router-dom"
import FeedBtn from "../button/FeedBtn"
import "./newFeedBackForm.scss"

export default function NewFeedBackForm() {
  return (
    <form className='new-feedback-from'>
      <div className="new-feedback-from__box">
        <h6 className='new-feedback-from__title'>Feedback Title</h6>
        <p className='new-feedback-from__text'>Add a short, descriptive headline</p>

        <input className='form-control' type="text" />
      </div>

      <div className="new-feedback-from__box">
        <h6 className='new-feedback-from__title'>Category</h6>
        <p className='new-feedback-from__text'>Choose a category for your feedback</p>

        <select className="form-select new-feedback-from__select">
          <option value="Feature">Feature</option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="Enhancement">Enhancement</option>
          <option value="Bug">Bug</option>

        </select>
      </div>

      <div className="new-feedback-from__box">
        <h6 className='new-feedback-from__title'>Feedback Detail</h6>
        <p className='new-feedback-from__text'>Include any specific comments on what should be improved, added, etc.</p>

        <textarea className="form-control" cols="30" rows="3"></textarea>
      </div>


      <div className="text-end">
        <div className="d-inline-block position-relative me-3">
          <Link to="/suggestions" className="position-absolute top-0 bottom-0 end-0 start-0"></Link>
          <FeedBtn text="Cancel" classs="cancelBtn" />
        </div>
        <FeedBtn text="+ Add Feedback" classs="addBtn" />
      </div>

    </form>
  )
}
