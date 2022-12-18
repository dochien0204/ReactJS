import React from "react";

const BookContext = React.createContext({
    currentUrl: "",
    bookList: [],
    pageNo: 0,
    pageSize: 0,
    sortBy: null,
    totalRecord: 0,
    onCatalogClick: (id) => {},
    onPageClick: () => {}
});

export default BookContext;