import React, { useEffect, useState } from "react";
import Cart from "../Cart";
import Product from "../Product";
import style from "./style.module.css";
import ProductItem from "../../data/shoes.json";
import { logDOM } from "@testing-library/react";

function Home() {
  const product = ProductItem.shoes;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  const onDelete = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);
  return (
    <div className={style.mainContent}>
      <Product onAdd={onAdd} product={product} />
      <Cart
        onRemove={onRemove}
        onAdd={onAdd}
        onDelete={onDelete}
        cartItems={cartItems}
      />
    </div>
  );
}

export default Home;
