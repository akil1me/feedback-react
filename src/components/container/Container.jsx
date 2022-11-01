import "./container.scss"

export const Container = ({ children, detailePage = "" }) => {
  return <div className={`container ${detailePage}`}>{children}</div>
}