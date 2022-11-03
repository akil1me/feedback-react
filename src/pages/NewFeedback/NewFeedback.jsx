import { Container } from "../../components/container/Container"
import GoBack from "../../components/go-back/GoBack"

const NewFeedBack = () => {
  return (
    <>
      <Container newFeedBack="container-3">
        <GoBack />
        <h3>Create New Feedback</h3>
      </Container>
    </>
  )
}

export default NewFeedBack