import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodsList from "./GoodsList";
import Loader from "./Loader";

export default function Shop() {
  const { setGoods, loading, isBasketShow } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
  }, []);

  return (
    <div className="container content">
      <Cart />
      {loading ? <Loader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
    </div>
  );
}
