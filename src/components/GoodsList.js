import { useContext } from "react";
import { ShopContext } from "../context";
import GoodItem from "./GoodItem";

function GoodsList() {
  const { goods } = useContext(ShopContext);

  if (!goods.length) {
    return <h1>Nothing here</h1>;
  } else {
    return (
      <div className="goods">
        {goods.map((good) => (
          <GoodItem key={good.mainId} {...good} />
        ))}
      </div>
    );
  }
}

export default GoodsList;
