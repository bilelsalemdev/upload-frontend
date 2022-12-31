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
          <label htmlFor="first-name">
            first name <span className="red">*</span>
          </label>
          <input type="text" placeholder="Enter your First name" />
        </div>
        <div className="login-form__inputs--item">
          <label htmlFor="last-name">
            last name <span className="red">*</span>
          </label>
          <input type="text" placeholder="Enter your Last name" />
        </div>
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
        <div className="login-form__inputs--item">
          <label htmlFor="phone">
            phone number <span className="red">*</span>
          </label>
          <input type="tel" placeholder="Enter your Phone number" />
        </div>
        <div className="login-form__inputs--item">
          <label htmlFor="birth">
            birth date <span className="red">*</span>
          </label>
          <input type="date" />
        </div>
        <div className="login-form__inputs--submission">
          <button className="btn">sign up</button>
          <p>
            have you an account ?
            <Link to="/login">
              {" "}
              <a href="/login" className="login-form__inputs--submission-link">
                Login
              </a>
            </Link>
          </p>
        </div>
      </section>
    </form>
  );
}
