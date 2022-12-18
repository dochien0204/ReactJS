import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import BookContext from "../../../../store/book-context";
import classes from "./BookItem.module.css";

const BookItem = (props) => {

  const [isLike, setIsLike] = useState(false);

  const fileImagePath = "http://localhost:8080/" + props.image;

  const unlikeBookHandler = () => {
    setIsLike(false);
  };

  const likeBookHandler = () => {
    setIsLike(true);
    console.log(fileImagePath);
  };

  return (
    <div className={classes["book-item"]}>
      <div className={classes.image}>
        <img
          src={fileImagePath}
          alt="book"
        />
      </div>
      <div className={classes.info}>
        <p className={classes.category}>{props.category}</p>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.price}>${props.price}</p>
        <div className={classes.action}>
          <span>ADD TO CART</span>

          {isLike ? (
            <AiFillHeart
              className={classes["icon-red"]}
              onClick={unlikeBookHandler}
            />
          ) : (
            <AiOutlineHeart
              className={classes["icon-white"]}
              onClick={likeBookHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
