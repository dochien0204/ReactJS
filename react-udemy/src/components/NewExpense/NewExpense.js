import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);

    
  };
  const [isAdd, setIsAdd] = useState(false);
  
  const setFalseAdd = () => {
    setIsAdd(false);
  }

  const setTrueAdd = () => {
    setIsAdd(true);
  }

  return (
    <div className='new-expense'>
      {!isAdd && <button onClick={setTrueAdd}>Add NewExpense</button>}
      {isAdd && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={setFalseAdd} onSubmit={setTrueAdd} />}
    </div>

  );
};

export default NewExpense;