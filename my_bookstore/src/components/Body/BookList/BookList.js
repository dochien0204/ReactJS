import React, { useCallback, useEffect, useState, useContext } from "react";
import BookContext from "../../../store/book-context";
import BookItem from "./BookItem/BookItem";
import classes from "./BookList.module.css";

const BookList = () => {
  const bookCtx = useContext(BookContext);
  const [bookList, setBookList] = useState(bookCtx.bookList);
  const {item} = bookCtx;

  // const fetchListBook = useCallback(async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/v1/book-store/book/list?pageNo=0&pageSize=10", {
  //       method: 'GET'
  //       }
  //     );
  //     if ((!response).ok) {
  //       console.log("Nhuw cc");
  //       throw new Error("Danh sách rỗng");
  //     }
  //     const data = await response.json();
  //     const transformedBooks = data.data.map((book) => {
  //       return {
  //         id: book.bookId,
  //         title: book.bookName,
  //         category: book.catalog.catalogName,
  //         author: book.author,
  //         price: book.price,
  //         image: book.image,
  //       };
  //     });
  //     setBookList(transformedBooks);
  //   } catch (error) {}
  // }, []);

  useEffect(() => {
    setBookList(bookCtx.bookList)
  }, item);

  let content = <p>Not found any books</p>

  if(bookList.length > 0) {
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
    <div className={classes["book-list"]}>
      {content}
    </div>
  );
};

export default BookList;
