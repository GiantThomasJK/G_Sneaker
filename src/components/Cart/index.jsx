import React, { useEffect } from "react";
import style from "./style.module.css";
import nikePng from "../../assets/nike.png";
import trashPng from "../../assets/trash.png";

function Cart(props) {
  const { cartItems, onAdd, onRemove, onDelete } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div className={style.card}>
      <div className={style.cardTop}>
        <img className={style.cardTop_logo} src={nikePng} alt="" />
      </div>
      <div className={style.cardTitle}>
        Your cart
        <div className={style.cardTitle_amount}>${itemsPrice.toFixed(2)}</div>
      </div>
      <div>
        {cartItems.length === 0 && (
          <div className={style.cartEmpty}>
            <div className={style.cartEmpty_text}>
              <p>Your cart is emty.</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className={style.cardBody}>
          <div>
            {cartItems.map((item) => {
              return (
                <>
                  <div>
                    <div>
                      <div className={style.cartItem}>
                        <div className={style.cartItem_left}>
                          <div
                            className={style.cartItem_image}
                            style={{ backgroundColor: `${item.color}` }}
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
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
