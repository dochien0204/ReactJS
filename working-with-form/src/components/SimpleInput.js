import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  let regexEmail = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');
  let formIsValid = false;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailInputChangeHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && regexEmail.test(value));

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    resetNameInput();
    
    resetEmailInput();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";
  const mailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name is required</p>}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email is required or email is invalid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
