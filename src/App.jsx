import { useState } from "react";

import Detail from "./pages/Detail/Detail";
import Suggestions from "./pages/Suggestions/Suggestions";
import PageLink from "./components/page-link/PageLink";

export const App = () => {

  const [page, setPage] = useState(false);

  const henldePage = () => {
    setPage((e) => e = !e)
  }

  return (
    <>
      <h1 className='visually-hidden'>Feedbaeck site</h1>

      <PageLink page={page} henldePage={henldePage} />
      {
        page ? <Suggestions page={page} /> : <Detail page={page} />
      }
    </>
  );
}


