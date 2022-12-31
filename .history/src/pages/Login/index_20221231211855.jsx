import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form className="login-form">
      <div className="login-form__logo">
        <img src="IconOstedhy.svg" alt="logo" />
      </div>
      <div className="login-form__title">sign up</div>
      <section className="login-form__inputs">
        
        <div className="login-form__inputs--item">
          <label htmlFor="email">
            email <span className="red">*</span>
          </label>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div className="login-form__inputs--item">
          <label htmlFor="password">
            password <span className="red">*</span>
          </label>
          <input type="password" placeholder="Enter your Password" />
        </div>
        
        <div className="login-form__inputs--submission">
          <button className="btn">log in</button>
          <p>
            haven't you an account ?
            <Link to="/signup">
              {" "}
              <a href="/signup" className="login-form__inputs--submission-link">
            Sign Up
              </a>
            </Link>
          </p>
        </div>
      </section>
    </form>
  );
}
