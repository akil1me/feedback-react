import "./feedBtn.scss"

const FeedBtn = (props) => {
  return (
    <button className={`feed-btn ${props.classs}`} type="button">
      {props.text}
    </button>
  )
}

export default FeedBtn;