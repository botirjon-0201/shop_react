import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
  const { mainId, displayName, price, quantity } = props;
  const { removeFromBasket, incrementQuantity, decrementQuantity } =
    useContext(ShopContext);

  return (
    <li className="collection-item" key={mainId}>
      {displayName} x {quantity} = {price.regularPrice * quantity} $
      <span className="secondary-content">
        <i
          className="material-icons basket-add"
          onClick={() => incrementQuantity(mainId)}
        >
          add_circle
        </i>
        <i
          className="material-icons basket-remove"
          onClick={() => {
            if (quantity > 1) {
              decrementQuantity(mainId);
            } else {
              removeFromBasket(mainId);
            }
          }}
        >
          remove_circle
        </i>
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(mainId)}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
