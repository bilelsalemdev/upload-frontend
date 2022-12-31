import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from "../../features/userAuthentication/userAuthenticationSlice";

export default function Login() {
  const { loading } = useSelector((store) => store.userAuthentication);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    );
  }
  return (
    <form className="login-form">
      <div className="login-form__logo">
        <img src="IconOstedhy.svg" alt="logo" />
      </div>
      <div className="login-form__title">log in</div>
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
