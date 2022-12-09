import { useEffect, useContext } from "react";
import { shopContext } from "../context";
import { API_KEY, API_URL } from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";

export default function Shop() {
  const { setGoods, loading, isBasketShow } = useContext(shopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
  }, []);

  return (
    <div className="container content">
      <Cart />
      {loading ? <Loader /> : <GoodList />}
      {isBasketShow && <BasketList />}
    </div>
  );
}
