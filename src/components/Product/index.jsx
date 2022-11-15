import React from "react";
import style from "./style.module.css";
import nikePng from "../../assets/nike.png";
import check from "../../assets/check.png";
import "animate.css";

function Product(props) {
  const { product, onAdd, cartItems } = props;
  return (
    <div className={style.card}>
      <div className={style.cardTop}>
        <img className={style.cardTop_logo} src={nikePng} alt="" />
      </div>
      <div className={style.cardTitle}>Our Products</div>
      <div className={style.cardBody}>
        <div className="">
          {product.map((item) => {
            return (
              <>
                <div key={item.id} className={style.shopItem}>
                  <div
                    className={style.shopItem_image}
                    style={{ backgroundColor: `${item.color}` }}
                  >
                    <img src={item.image} alt="" />
                  </div>
                  <div className={style.shopItem_name}>{item.name}</div>
                  <div className={style.shopItem_description}>
                    {item.description}
                  </div>
                  <div className={style.shopItem_bottom}>
                    <div className={style.shopItem_price}>${item.price}</div>
                    {cartItems.find((x) => x.id === item.id) ? (
                      <div className={style.shopItem_button}>
                        <img src={check} alt="" />
                      </div>
                    ) : (
                      <div
                        onClick={() => onAdd(item)}
                        className={style.shopItem_button}
                      >
                        ADD TO CART
                      </div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
