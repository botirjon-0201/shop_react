import { useContext } from "react";
import { shopContext } from "../context";
import GoodItem from "./GoodItem";

export default function GoodList() {
  const { goods = [] } = useContext(shopContext);

  if (!goods.length) {
    return <h3>Nothing here!</h3>;
  } else {
    return (
      <div className="goods">
        {goods.map((good) => (
          <GoodItem key={good.id} {...good} />
        ))}
      </div>
    );
  }
}
