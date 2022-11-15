import { useRef } from "react";
import { createContext, useState } from "react";
import feedList from "./data/feedList";
import Routers from "./routers/Routers";
import commets from "./data/comments";

export const AppContext = createContext();

export const AuthContext = createContext();

export const App = () => {

  const [feedbackList, setFeedbackList] = useState(feedList);
  const [comments, setComments] = useState([])

  const [login, setLogin] = useState();

  const inputRef = useRef();
  const textAreaRef = useRef();
  const selectRef = useRef();
  const commetRef = useRef();

  const emailRef = useRef();
  const passwordRef = useRef();
  const userRef = useRef();

  const values = { feedbackList, setFeedbackList, inputRef, textAreaRef, selectRef, comments, setComments, commetRef };

  return (
    <AuthContext.Provider value={{ login, setLogin, emailRef, passwordRef, userRef }}>
      <AppContext.Provider value={values}>
        <Routers />
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}


