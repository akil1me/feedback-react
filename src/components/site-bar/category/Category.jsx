import Button from "../../button/Button"
import "./category.scss"

export const Category = () => {
  return (
    <div className="category">
      <div className="category__inner d-flex flex-wrap">
        <Button text="All" classs="b-active mb-3" />
        <Button text="UI" classs="ms-2 mb-3" />
        <Button text="UX" classs="ms-2 mb-3" />
        <Button text="Enhancement" classs=" mb-3" />
        <Button text="Bug" classs="ms-2 mb-3" />
        <Button text="Feature" />
      </div>
    </div>
  )
}