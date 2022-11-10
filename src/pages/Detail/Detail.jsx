import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";

import AddComment from "../../components/add-comment/AddComment";
import Comments from "../../components/comments/Comments";
import { Container } from "../../components/container/Container";

import EditeFeedbackList from "../../components/edit-feedback-list/EdtiteFeedbackList";
import EditeFeedback from "../../components/edit-feedback/EditFeedback";

const Detail = () => {

  const { feedbackList } = useContext(AppContext)

  const { id } = useParams();

  const feedBackList = feedbackList.find(item => item.id === +id);

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