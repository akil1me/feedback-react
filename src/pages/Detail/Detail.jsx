import { useParams } from "react-router-dom";

import AddComment from "../../components/add-comment/AddComment";
import Comments from "../../components/comments/Comments";
import { Container } from "../../components/container/Container";

import EditeFeedbackList from "../../components/edit-feedback-list/EdtiteFeedbackList";
import EditeFeedback from "../../components/edit-feedback/EditFeedback";

import feedList from "../../data/feedList";

const Detail = () => {

  const { id } = useParams();

  const feedBackList = feedList.find(item => item.id === +id);

  return (
    <Container detailePage="container-2">
      {
        feedBackList ?
          <>
            <EditeFeedback />
            <EditeFeedbackList feedBackList={feedBackList} />
            <Comments {...feedBackList} />
            <AddComment />
          </> :
          <h3 className="text-center">404 page not found</h3>
      }

    </Container>
  )
}

export default Detail;