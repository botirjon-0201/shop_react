import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToBasket } from "../redux/reducers/good_slice";

function GoodItem(props) {
  const { mainId, displayName, displayDescription, price, granted } = props;
  const dispatch = useDispatch();

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
          onClick={() => {
            dispatch(addToBasket({ mainId, displayName, price }));
            toast.success("Goods added to basket successfully!");
          }}
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
