import { Link } from "react-router-dom"
import FeedBtn from "../button/FeedBtn"
import "./editeFeedBackForm.scss"

export default function EditeFeedBackForm({ id, title, text, btn }) {
  return (
    <form className='edite-feedback-from'>
      <div className="edite-feedback-from__box">
        <h6 className='edite-feedback-from__title'>Feedback Title</h6>
        <p className='edite-feedback-from__text'>Add a short, descriptive headline</p>

        <input className='form-control' type="text" value={title} />
      </div>

      <div className="edite-feedback-from__box">
        <h6 className='edite-feedback-from__title'>Category</h6>
        <p className='edite-feedback-from__text'>Choose a category for your feedback</p>

        <select className="form-select edite-feedback-from__select" value={btn}>
          <option value="Feature">Feature</option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="Enhancement">Enhancement</option>
          <option value="Bug">Bug</option>

        </select>
      </div>

      <div className="edite-feedback-from__box">
        <h6 className='edite-feedback-from__title'>Update Status</h6>
        <p className='edite-feedback-from__text'>Change feature state</p>

        <select className="form-select edite-feedback-from__select" >
          <option value="Planned">Planned</option>
          <option value="Suggestion">Suggestion</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Live">Live</option>
        </select>
      </div>

      <div className="edite-feedback-from__box">
        <h6 className='edite-feedback-from__title'>Feedback Detail</h6>
        <p className='edite-feedback-from__text'>Include any specific comments on what should be improved, added, etc.</p>

        <textarea className="form-control" cols="30" rows="3" value={text}></textarea>
      </div>


      <div className="d-flex justify-content-between">
        <div>
          <button className="edite-feedback-from__btn btn btn-danger px-3" type="button">Delete</button>
        </div>

        <div>
          <div className="d-inline-block position-relative me-3">
            <Link to={`/detail/${id}`} className="position-absolute top-0 bottom-0 end-0 start-0"></Link>
            <FeedBtn text="Cancel" classs="cancelBtn" />
          </div>
          <FeedBtn text="+ Add Feedback" classs="addBtn" />
        </div>
      </div>

    </form>
  )
}
