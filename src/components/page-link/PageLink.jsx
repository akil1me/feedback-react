import "./page-link.scss"

const PageLink = ({ page, henldePage }) => {
  return (
    <a href={`${page ? "#suggestions" : "#detail"}`} className={`page-button position-fixed btn ${page ? "btn-primary" : "btn-danger"}`} onClick={henldePage}>{page ? "Next page >" : "<  Go back"}</a>
  )
}

export default PageLink;