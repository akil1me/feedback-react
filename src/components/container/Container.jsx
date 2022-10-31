import "./container.scss"

export const Container = ({ children, page }) => {
  return <div className={`container ${page ? "container" : "container-2"}`}>{children}</div>
}