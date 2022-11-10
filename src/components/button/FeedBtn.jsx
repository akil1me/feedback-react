import "./feedBtn.scss"

const FeedBtn = (props) => {
  return (
    <button className={`feed-btn ${props.classs} ${props.edit}`} type="submit">
      {props.text}
    </button>
  )
}

export default FeedBtn;