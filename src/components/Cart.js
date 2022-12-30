import { useDispatch, useSelector } from "react-redux";
import { toggleBasketShow } from "../redux/reducers/good_slice";

function Cart() {
  const { order } = useSelector((state) => state);
  const dispatch = useDispatch();
  const quantity = order.length;

  return (
    <div
      className="cart blue darken-d white-text"
      onClick={() => dispatch(toggleBasketShow())}
    >
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
