import { useState } from "react";

const SimpleInput = (props) => {
  
  let regexEmail = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;

  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && nameInputTouched;
  const enteredEmailIsValid = enteredEmail.trim() !== '' && regexEmail.test(enteredEmail);
  let emailInputIsInvalid = !enteredEmailIsValid && emailInputTouched;
  let formIsValid = false;

  if (enteredNameIsValid && !emailInputIsInvalid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setNameInputTouched(true);
    setEnteredName(event.target.value);  
  };

  const nameInputBlurHandler = event => {
    setNameInputTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
  }

  const mailInputChangeHandler = event => {
      setEmailInputTouched(true);
      setEnteredEmail(event.target.value);
    }

  const mailInputBlurHandler = event => {
    setEmailInputTouched(true);
    if (emailInputIsInvalid) {
      return;
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setNameInputTouched(true);
    setEmailInputTouched(true);

    if (!enteredNameIsValid && !nameInputIsInvalid) {
       return;
    }

    setEnteredName("");
    setEnteredEmail("");
    setNameInputTouched(false);
    setEmailInputTouched(false);
  };

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';
  const mailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid';

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
        {nameInputIsInvalid && <p className="error-text">Name is required</p>}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={mailInputChangeHandler}
          onBlur={mailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Email is required or email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
