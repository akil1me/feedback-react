import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/container/Container";

import editeFeedBackImg from "../../assets/img/edite-feedback.svg";

import NewFeedBackMain from "../../components/new-feedback-main/NewFeedBackMain";
import { AppContext } from "../../App";


export const EditeFeedBack = () => {

  const { id } = useParams();

  const { feedbackList, setFeedbackList } = useContext(AppContext)

  const link = feedbackList.find(data => data.id === +id);


  const hendleFeedbackSubmit = (inputTitle, textValue, selectValue) => {
    console.log("dd");
  }

  return (

    <div className="mt-3">
      <Container newFeedBack="container-3">
        <Link to={`/detail/${id}`}>{"< Go Back"}</Link>

        <NewFeedBackMain
          editeFeedBackImg={editeFeedBackImg}
          title={`Editing '${link.title}'`}
          link={link}
          onSubmit={hendleFeedbackSubmit}
        />
      </Container>
    </div>

  )
}
