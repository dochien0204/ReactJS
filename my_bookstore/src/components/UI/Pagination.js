import React from 'react'
import classes from "./Pagination.module.css"

const Pagnation = (props) => {

    let pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalBooks / props.booksPerPage); i++) {
        pageNumbers.push(i);
    }

    const pageClickHandler = (page) => {
      props.onPageClick(page);
    };

  return (
    <div className={`${classes.pagination} ${props.className}`}>
        {pageNumbers.map((page) => {
            return <button key={page} onClick={pageClickHandler.bind(null , page)}>{page}</button>
        })}
    </div>
  )
}

export default React.memo(Pagnation);