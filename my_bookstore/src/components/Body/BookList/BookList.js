import React from 'react'
import BookItem from './BookItem/BookItem';
import classes from "./BookList.module.css";

const BookList = () => {
  return (
    <div className={classes['book-list']}>
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
    </div>
  )
}

export default BookList