import React from "react";
import { FaBook } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import BookImage from "../../../assets/BookImage.jpg";
import classes from "./BottomHeader.module.css";
import Button from "../../UI/Button";

const BottomHeader = () => {
  return (
    <React.Fragment>
      <div className={classes["bottom-header"]}>
        <div className={classes.title}>
        <FaBook className={classes.icon} />
        <p>Bookies</p>
      </div> 

        

         <div className={classes.search}>
        <input
          type="text"
          className={classes.input}
          placeholder="Search book..."
        />
        <button className={classes.button}>
          <BiSearch className={classes["search-icon"]} />
        </button>
      </div> 
      </div>
      <div className={classes.image}>
          <img src={BookImage} alt="book-page" />
          <div className={classes.quotes}>
            <h3 className={classes.text}>
              A book is a gift you can open again and again
            </h3>
            <p className={classes.author}>- Garrison Keillar -</p>
          </div>
          <Button className={classes["butt-discount"]}>
            <p>Claim Discount</p>
          </Button>
          <Button className={classes["butt-sale"]}>
            <p>Open Flash Sale</p>
          </Button>
          <div className={classes["backdrop-image"]}></div>
        </div>
    </React.Fragment>
  );
};

export default BottomHeader;
