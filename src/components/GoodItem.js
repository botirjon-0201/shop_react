import { useContext } from "react";
import { ShopContext } from "../context";

function GoodItem(props) {
  const { mainId, displayName, displayDescription, price, granted } = props;
  const { addToBasket } = useContext(ShopContext);

  return (
    <div key={mainId} className="card">
      <div className="card-image">
        <img src={granted[0].images.full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ mainId, displayName, price })}
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.regularPrice} $
        </span>
      </div>
    </div>
  );
}

export default GoodItem;
