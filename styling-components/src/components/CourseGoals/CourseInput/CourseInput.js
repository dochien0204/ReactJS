import React from 'react'

import { useState } from 'react'
import Button from '../../UI/Button'
import styles from './CourseInput.module.css';
// import styled from 'styled-components'

// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid ? 'red' : 'black'};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//   background: ${props => props.invalid ? 'rgb(235, 162, 162)' : 'transparent'};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;



const CourseInput = (props) => {

    const [enteredInput, setEnteredInput] = useState('');
    const [isValid, setIsValid] = useState(true);



    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredInput.trim().length === 0)
        {
            setIsValid(false);
            setEnteredInput('');
            return;
        }
        else
        {
            props.addNewCourse(enteredInput);
        }
        setEnteredInput('');
    }

    const changeInputHandler = (event) => {
        if(event.target.value.trim().length > 0)
        {
            setIsValid(true);
            setEnteredInput(event.target.value);
        }
        else{
            setIsValid(false);
            setEnteredInput('');
        }
        
    }
    return (
      <form onSubmit={submitHandler}>
        <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
          <label>
            Course Goal
          </label>
          <input
            
            onChange={changeInputHandler}
            type="text"
            value={enteredInput}
          ></input>
        </div>
        <Button type="submit">Add New Course</Button>
      </form>
    );
}

export default CourseInput;