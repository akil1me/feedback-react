import AddComment from "../../components/add-comment/AddComment";
import Comments from "../../components/comments/Comments";
import { Container } from "../../components/container/Container";
import EditeFeedback from "../../components/edit-feedback/EdtiteFeedback";

const Detail = () => {
  return (
    <Container detailePage="container-2">
      <EditeFeedback />
      <Comments />
      <AddComment />
    </Container>
  )
}

export default Detail;