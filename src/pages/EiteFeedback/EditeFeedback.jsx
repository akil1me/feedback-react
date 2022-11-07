import { Link, useParams } from "react-router-dom"
import { Container } from "../../components/container/Container"
import EditeFeedBackMain from "../../components/edite-feedback-main/EditeFeedBackMain"

import datum from "../../data/feedList"

const EditeFeedBack = () => {

  const { id } = useParams();

  const link = datum.find(data => data.id === +id)

  return (
    <div className="mt-3">
      <Container newFeedBack="container-3">
        <Link to={`/detail/${id}`}>{"< Go Back"}</Link>
        <EditeFeedBackMain {...link} />
      </Container>
    </div>
  )
}

export default EditeFeedBack;