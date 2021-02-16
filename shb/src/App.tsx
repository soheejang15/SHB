import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import { Main, MyPage } from "./pages";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/mypage" component={MyPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
