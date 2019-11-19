import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import * as ROUTES from "./components/constants/routes";
import SignUpPage from "./components/SignUp";
import SignInPage from "./components/SignIn";
import { withAuthentication } from "./components/Session";
import AccountPage from "./components/Account";
import UploadPage from "./components/Upload";
import ViewBook from "./components/layout/ViewBook";
import Cart from "./components/Cart";
import { useBooksContext } from "./components/BookContext";

const App = () => {
  return (
    <Router>
      <useBooksContext.Provider>
        <div className="app">
          <Navigation />

          <Route exact path="/" component={Home} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.LOG_IN} component={SignInPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.UPLOAD} component={UploadPage} />
          <Route path={ROUTES.BOOK} exact component={ViewBook} />
          <Route path={ROUTES.CART} exact component={Cart} />
        </div>
      </useBooksContext.Provider>
    </Router>
  );
};

export default withAuthentication(App);
