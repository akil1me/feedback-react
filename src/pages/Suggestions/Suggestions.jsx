import { Container } from "../../components/container/Container";
import { Main } from "../../components/main/Main";
import { SiteBar } from "../../components/site-bar/SiteBar";

import "./suggestions.scss"

const Suggestions = () => {
  return (
    <div className="home">
      <Container>
        <div className="row">
          <div className="col-3">
            <SiteBar />
          </div>

          <div className="col-9">
            <Main />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Suggestions;