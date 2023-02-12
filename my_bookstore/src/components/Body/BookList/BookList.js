import React, {useEffect, useState, useContext, useCallback } from "react";
import BookContext from "../../../store/book-context";
import Pagnation from "../../UI/Pagination";
import BookItem from "./BookItem/BookItem";
import classes from "./BookList.module.css";

const BookList = () => {
  const bookCtx = useContext(BookContext);
  const [bookList, setBookList] = useState(bookCtx.bookList);

  const {item} = bookCtx;

  useEffect(() => {
    setBookList(bookCtx.bookList);
  }, item);

  const pageClickHandler = useCallback((page) => {

    bookCtx.onPageClick(page - 1);
  }, []);

  let content = <p>Not found any books</p>;

  if (bookList.length > 0) {
    content = bookList.map((book) => (
      <BookItem
        key={book.id}
        id={book.id}
        title={book.title}
        category={book.category}
        author={book.author}
        price={book.price.toFixed(2)}
        image={book.image}
      />
    ));
  }

  return (
    <div>
      <div className={classes["book-list"]}>
        {content}
      </div>
      <Pagnation
          className={classes.page}
          totalBooks={bookCtx.totalRecord}
          booksPerPage={bookCtx.pageSize}
          onPageClick={pageClickHandler}
        />
    </div>
  );
};

export default BookList;
