import { useContext } from "react";
import { ShopContext } from "../context";
import BasketItem from "./BasketItem";

function BasketList() {
  const { order, handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price.regularPrice * elem.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => {
          return <BasketItem key={item.mainId} {...item} />;
        })
      ) : (
        <li className="collection-item">Basket is empty</li>
      )}
      <li className="collection-item active">Total cost: {totalPrice}</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
