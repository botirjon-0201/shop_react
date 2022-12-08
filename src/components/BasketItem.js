import { useContext } from "react";
import { shopContext } from "../context";

export default function BasketItem(props) {
  const { id, name, price, quantity } = props;
  const { removeFromBasket, incrementQuantity, decrementQuantity } =
    useContext(shopContext);

  return (
    <li className="collection-item">
      {name} x {quantity} = {price * quantity} $
      <span className="secondary-content">
        <i
          className="material-icons basket-add"
          onClick={() => incrementQuantity(id)}
        >
          add_circle
        </i>
        <i
          className="material-icons basket-remove"
          onClick={() => {
            if (quantity > 1) {
              decrementQuantity(id);
            } else {
              removeFromBasket(id);
            }
          }}
        >
          remove_circle
        </i>
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(id)}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
}
