import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "./Navigation.css";
import SignOut from "../SignOut";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => {
  return (
    <div className="navigation">
      <nav>
        <section className="brand-name">
          <Link to={ROUTES.HOME}><span>BOOKGARDEN</span></Link>
        </section>
        <section className="auth-actions">
          <button className="log-in">
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </button>
          <button className="log-in">
            <Link to={ROUTES.UPLOAD}>Sell your Book</Link>
          </button>
          <button className="cart">
            <Link to={ROUTES.CART}>
              <i className="fas fa-shopping-cart" />
            </Link>
          </button>
          <button className="log-out">
            <SignOut />
          </button>
        </section>
      </nav>
    </div>
  );
};

const NavigationNonAuth = authUser => {
  return (
    <div className="navigation">
      {console.log(authUser)}
      <nav>
        <section className="brand-name">
          <span>BOOKGARDEN</span>
        </section>
        <section className="auth-actions">
          <button className="log-in">
            <Link to={ROUTES.LOG_IN}>Log In</Link>
          </button>
          <button className="sign-up">
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          </button>
        </section>
      </nav>
    </div>
  );
};

export default Navigation;
