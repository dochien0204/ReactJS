import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import useInput from "../hooks/use-input";

const Auth = () => {
  let regexEmail = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasErrors: emailHasErrors,
    inputBlurHandler: emailInputBlurHandler,
    inputChangeHandler: emailInputChangedHandler,
    resetInput: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && regexEmail.test(value));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasErrors: passwordInputHasErrors,
    inputBlurHandler: passwordInputBlurHander,
    inputChangeHandler: passwordInputChangedHander,
    resetInput: resetPasswordInput
  } = useInput(value => value.trim() !== '');

  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
    resetEmailInput();
    resetPasswordInput();
  };

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={enteredEmail} onBlur={emailInputBlurHandler} onChange={emailInputChangedHandler} />
            {emailHasErrors && <p>Email is required</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={enteredPassword} onBlur={passwordInputBlurHander} onChange={passwordInputChangedHander} />
            {passwordInputHasErrors && <p>Password is required</p>}
          </div>
          <button disabled={!formIsValid}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
