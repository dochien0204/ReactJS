import React, { useCallback, useEffect, useState, useContext } from "react";
import BookContext from "../../../store/book-context";
import Button from "../../UI/Button";
import classes from "./Menu.module.css";

const Menu = () => {
  const [catalogs, setCatalogs] = useState([]);

  const bookCtx = useContext(BookContext);

  const fetchCatalog = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/book-store/catalog/list",
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Not found catalog");
      }

      const data = await response.json();
      const transformedCatalogs = data.data.map((catalog) => {
        return {
          name: catalog.catalogName,
          id: catalog.catalogId,
        };
      });
      setCatalogs(transformedCatalogs);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  const onCatalogClickHandler = (id) => {
    bookCtx.onCatalogClick(id);
  };

  let content = <p>Not found any catalog</p>;

  if (catalogs.length > 0) {
    content = catalogs.map((catalog) => (
      <Button
        className={classes.but}
        key={catalog.id}
        id={catalog.id}
        name={catalog.name}
        onClick={onCatalogClickHandler.bind(null, catalog.id)}
      >
        <p>{catalog.name}</p>
      </Button>
    ));
  }

  return <div className={classes.menu}>{content}</div>;
};

export default Menu;
