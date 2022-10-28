import "./button.scss"

const Button = (props) => {
  return (
    <button className={`button ${props.classs}`} type="button">
      {props.text}
    </button>
  )
}

export default Button;