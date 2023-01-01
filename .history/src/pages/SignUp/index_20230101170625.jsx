import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  register,
  setBirth,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  setPhone,
} from "../../features/userRegistration/userRegisrationSlice";
export default function SignUp() {
  const { loading, firstName, lastName, email, password, birth, phone } =
    useSelector((store) => store.userRegistration);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(register());
  }, [dispatch]);
  /*  if (loading) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    );
  } */
  return (
    <form className="signup-form">
      <div className="signup-form__logo">
        <img src="IconOstedhy.svg" alt="logo" />
      </div>
      <div className="signup-form__title">sign up</div>
      <section className="signup-form__inputs">
        <div className="signup-form__inputs--item">
          <label htmlFor="first-name">
            first name <span className="red">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your First name"
            value={firstName}
            onChange={(e) => dispatch(setFirstName(e.target.value))}
          />
        </div>
        <div className="signup-form__inputs--item">
          <label htmlFor="last-name">
            last name <span className="red">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Last name"
            value={lastName}
            onChange={(e) => dispatch(setLastName(e.target.value))}
          />
        </div>
        <div className="signup-form__inputs--item">
          <label htmlFor="email">
            email <span className="red">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
        <div className="signup-form__inputs--item">
          <label htmlFor="password">
            password <span className="red">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        <div className="signup-form__inputs--item">
          <label htmlFor="phone">
            phone number <span className="red">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter your Phone number"
            value={phone}
            onChange={(e) => dispatch(setPhone(e.target.value))}
          />
        </div>
        <div className="signup-form__inputs--item">
          <label htmlFor="birth">
            birth date <span className="red">*</span>
          </label>
          <input
            type="date"
            value={birth}
            onChange={(e) => dispatch(setBirth(e.target.value))}
          />
        </div>
        <div className="signup-form__inputs--submission">
          <button className="btn">sign up</button>
          <p>
            have you an account ?
            <Link to="/login">
              {" "}
              <a href="/login" className="signup-form__inputs--submission-link">
                Login
              </a>
            </Link>
          </p>
        </div>
      </section>
    </form>
  );
}
