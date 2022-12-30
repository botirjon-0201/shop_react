import { useSelector } from "react-redux";
import GoodItem from "./GoodItem";

function GoodsList() {
  const { goods } = useSelector((state) => state);

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
