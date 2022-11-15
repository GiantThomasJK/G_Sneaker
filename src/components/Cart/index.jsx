import React from "react";
import style from "./style.module.css";
import nikePng from "../../assets/nike.png";
import trashPng from "../../assets/trash.png";

function Cart(props) {
  const { cartItems, onAdd, onRemove, onDelete } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  let productTest = [];
  return (
    <div className={style.card}>
      <div className={style.cardTop}>
        <img className={style.cardTop_logo} src={nikePng} alt="" />
      </div>
      <div className={style.cardTitle}>
        Your Cart
        <div className={style.cardTitle_amount}>${itemsPrice.toFixed(2)}</div>
      </div>
      <div>{cartItems.length === 0 && <div>Your cart is emty.</div>}</div>
      <div>
        {cartItems.map((item) => {
          return (
            <>
              <div key={item.id} className={style.cardBody}>
                <div>
                  <div>
                    <div className={style.cartItem}>
                      <div className={style.cartItem_left}>
                        <div
                          className={style.cartItem_image}
                          style={{ backgroundColor: "rgb(225,231,237)" }}
                        >
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                      <div className={style.cartItem_right}>
                        <div className={style.cartItem_name}>{item.name}</div>
                        <div className={style.cartItem_price}>
                          ${item.price.toFixed(2)}
                        </div>
                        <div className={style.cartItem_actions}>
                          <div className={style.cartItem_count}>
                            <div
                              onClick={() => onRemove(item)}
                              className={style.cartItem_count_button}
                            >
                              -
                            </div>
                            <div className={style.cartItem_count_number}>
                              {item.qty}
                            </div>

                            <div
                              onClick={() => onAdd(item)}
                              className={style.cartItem_count_button}
                            >
                              +
                            </div>
                          </div>
                          <div
                            onClick={() => onDelete(item)}
                            className={style.cartItem_remove}
                          >
                            <img src={trashPng} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
