import React, {useState} from "react";
import beautyIsAWound from "../../../../assets/BeautyIsAWound.jpg";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import classes from "./BookItem.module.css";

const BookItem = (props) => {

  const [isLike, setIsLike] = useState(false);

  const unlikeBookHandler = () => {
    setIsLike(false);
  }

  const likeBookHandler = () => {
    setIsLike(true);
  }

  return (
    <div className={classes["book-item"]}>
      <div className={classes.image}>
        <img
          src="https://cf.shopee.vn/file/99a07134c5f82b6619037d5e2abc8c5c"
          alt="book"
        />
      </div>
      <div className={classes.info}>
        <p className={classes.category}>BIOGRAPHY</p>
        <p className={classes.title}>Trái Đất và vũ trụ</p>
        <p className={classes.author}>Nora Roberts</p>
        <p className={classes.price}>$99.00</p>
        <div className={classes.action}>
          <span>ADD TO CART</span>

            {isLike ? <AiFillHeart className={classes['icon-red']} onClick={unlikeBookHandler}/> : <AiOutlineHeart className={classes['icon-white']} onClick={likeBookHandler}/>}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
