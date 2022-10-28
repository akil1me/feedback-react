import { Container } from "../../components/container/Container";
import { Main } from "../../components/main/Main";
import { SiteBar } from "../../components/site-bar/SiteBar";

import "./home.scss"

export const Home = () => {
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