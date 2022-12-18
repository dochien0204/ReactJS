import React from "react";

const BookContext = React.createContext({
    bookList: [],
    onCatalogClick: (id) => {}
});

export default BookContext;