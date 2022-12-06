import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const Login = (props) => {
  const emailReducer = (prevState, action) => {
    if (action.type === "EMAIL_INPUT") {
      return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "EMAIL_BLUR") {
      return { value: prevState.value, isValid: prevState.isValid };
    }
    return { value: "", isValid: false };
  };

  const passwordReducer = (prevState, action) => {
    if (action.type === "PASSWORD_INPUT") {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === "PASSWORD_BLUR") {
      return { value: prevState.value, isValid: prevState.isValid };
    }

    return { value: "", isValid: false };
  };
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, disPatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //object destructuring
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEAN UP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    disPatchEmail({ type: "EMAIL_INPUT", val: event.target.value });
    setFormIsValid(emailState.isValid && passwordState.value.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
    setFormIsValid(emailState.isValid && passwordState.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    disPatchEmail({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid) {
      authCtx.onLogIn(emailState.value, passwordState.value);
    } else if(!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
          label="E-Mail"
        />
        <Input
          ref={passwordInputRef}
          type="password"
          id="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
          label="Password"
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
