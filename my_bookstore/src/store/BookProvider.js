import React, { useState } from "react";
import BookContext from "./book-context";

const BookProvider = (props) => {
  const [books, setBooks] = useState([]);

  const onCatalogClickHandler = async (id) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/book-store/book/catalog/" +
          id +
          "/search?pageNo=0&pageSize=10&sortBy=bookId"
      );
      if (!response.ok) {
        throw new Error(response.json().userMessage);
      }
      const data = await response.json();
      const bookList = data.data.map((book) => {
        return {
          id: book.bookId,
          title: book.bookName,
          category: book.catalog.catalogName,
          author: book.author,
          price: book.price,
          image: book.image,
        };
      });
      setBooks(bookList);
    } catch (error) {}
  };

  const bookContext = {
    bookList: books,
    onCatalogClick: onCatalogClickHandler,
  };

  return (
    <BookContext.Provider value={bookContext}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
