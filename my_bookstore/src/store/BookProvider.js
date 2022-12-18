import React, { useCallback, useEffect, useState } from "react";
import BookContext from "./book-context";

const BookProvider = (props) => {
  const [currentUrl, setCurrentUrl] = useState(
    "http://localhost:8080/api/v1/book-store/book/list"
  );
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("bookId");
  const [books, setBooks] = useState([]);
  const [totalRecord, setTotalRecord] = useState(0);

  const url =
    currentUrl +
    "?pageNo=" +
    pageNo +
    "&pageSize=" +
    pageSize +
    "&sortBy=" +
    sortBy;

  const fetchBookList = useCallback(async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      console.log(currentUrl + "?" + pageNo + "&" + pageSize + "&" + sortBy);
      if (!response.ok) {
        throw new Error("Not found books");
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
      const totalElements = data.pagination.totalElements;
      setTotalRecord(totalElements);
      console.log(totalElements);
    } catch (error) {}
  }, [url, pageNo, pageSize, sortBy, currentUrl]);

  useEffect(() => {
    fetchBookList();
  }, [fetchBookList]);

  const onCatalogClickHandler = async (id) => {
    setCurrentUrl("http://localhost:8080/api/v1/book-store/book/catalog/" + id + "/search");
    setPageNo(0);
  };

  const pageClickHandler = async (pageNo) => {
    setPageNo(pageNo);
  };

  const bookContext = {
    currentUrl: currentUrl,
    bookList: books,
    pageNo: pageNo,
    pageSize: pageSize,
    sortBy: sortBy,
    totalRecord: totalRecord,
    onCatalogClick: onCatalogClickHandler,
    onPageClick: pageClickHandler,
  };

  return (
    <BookContext.Provider value={bookContext}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
