import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const inputHasError = !enteredValueIsValid && isTouched;

    const inputBlurHandler = event => {
        setIsTouched(true);
    };

    const inputChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const resetInput = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: enteredValueIsValid,
        hasErrors: inputHasError,
        inputBlurHandler,
        inputChangeHandler,
        resetInput
    };

};

export default useInput;