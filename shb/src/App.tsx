import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./packages/styles/GlobalStyle";
import SignIn from "./pages/Authentication/SignUp";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignIn} />
        {/* <Route exact path="/my-page" component={MyPage} />  */}
      </Switch>
    </HashRouter>
  );
}

export default App;
