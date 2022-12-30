import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromBasket,
} from "../redux/reducers/good_slice";

function BasketItem(props) {
  const { mainId, displayName, price, quantity } = props;
  const dispatch = useDispatch();

  return (
    <li className="collection-item" key={mainId}>
      {displayName} x {quantity} = {price.regularPrice * quantity} $
      <span className="secondary-content">
        <i
          className="material-icons basket-add"
          onClick={() => {
            dispatch(incrementQuantity(mainId));
            toast.info("Goods increased by one!");
          }}
        >
          add_circle
        </i>
        <i
          className="material-icons basket-remove"
          onClick={() => {
            if (quantity > 1) {
              dispatch(decrementQuantity(mainId));
              toast.error("Goods decreased by one!");
            } else {
              dispatch(removeFromBasket(mainId));
              toast.success(
                <p style={{ color: "red" }}>
                  Goods deleted from basket successfully!
                </p>
              );
            }
          }}
        >
          remove_circle
        </i>
        <i
          className="material-icons basket-delete"
          onClick={() => {
            dispatch(removeFromBasket(mainId));
            toast.success(
              <p style={{ color: "red" }}>
                Goods deleted from basket successfully!
              </p>
            );
          }}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
