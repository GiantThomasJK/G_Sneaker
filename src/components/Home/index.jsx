import React, { useEffect, useState } from "react";
import Cart from "../Cart";
import Product from "../Product";
import style from "./style.module.css";
import ProductItem from "../../data/shoes.json";
import { logDOM } from "@testing-library/react";

function Home() {
  const product = ProductItem.shoes;
  const [cartItems, setCartItems] = useState([]);
  const [isAdd, setIsAdd] = useState(false);


  //Add item to cart
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      const newCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...exist, qty: exist.qty + 1, status: true }
          : item
      );
      setCartItems(newCart);
      const isADD = true;
      setIsAdd(isADD);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1, status: true }]);
      const isADD = true;
      setIsAdd(isADD);
      console.log(isAdd);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };


  //Increase or decrease the amount
  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      setIsAdd(true);

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
      setIsAdd(true);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  //Remove item from cart
  const onDelete = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setIsAdd(true);
  };

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);

  useEffect(() => {
    if (isAdd) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setIsAdd(false);
    }
  }, [cartItems]);

  return (
    <div className={style.mainContent}>
      <Product onAdd={onAdd} product={product} cartItems={cartItems} />
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
