import { useDispatch, useSelector } from "react-redux";
import { toggleBasketShow } from "../redux/reducers/good_slice";
import BasketItem from "./BasketItem";

function BasketList() {
  const { order } = useSelector((state) => state);
  const dispatch = useDispatch();

  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price.regularPrice * elem.quantity;
  }, 0);

  return (
    <div className="bsk">
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
        <i
          className="material-icons basket-close"
          onClick={() => dispatch(toggleBasketShow())}
        >
          close
        </i>
      </ul>
    </div>
  );
}

export default BasketList;
