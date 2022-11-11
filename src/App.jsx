import { useRef } from "react";
import { createContext, useState } from "react";
import feedList from "./data/feedList";
import Routers from "./routers/Routers";

export const AppContext = createContext();

export const AuthContext = createContext();

export const App = () => {

  const [feedbackList, setFeedbackList] = useState(feedList);

  const [login, setLogin] = useState();

  const inputRef = useRef();
  const textAreaRef = useRef();
  const selectRef = useRef();

  const values = { feedbackList, setFeedbackList, inputRef, textAreaRef, selectRef };

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      <AppContext.Provider value={values}>
        <Routers />
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}


