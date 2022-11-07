import { Container } from "../../components/container/Container"
import GoBack from "../../components/go-back/GoBack"
import NewFeedBackMain from "../../components/new-feedback-main/NewFeedBackMain"

const NewFeedBack = () => {
  return (
    <div className="mt-3">
      <Container newFeedBack="container-3">
        <GoBack />
        <NewFeedBackMain />
      </Container>
    </div>
  )
}

export default NewFeedBack;