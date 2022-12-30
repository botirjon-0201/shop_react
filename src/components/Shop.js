import { useEffect } from "react";
import { API_KEY, API_URL } from "../service/api";
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodsList from "./GoodsList";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setGoods } from "../redux/reducers/good_slice";

export default function Shop() {
  const { isLoading, isBasketShow } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setGoods(data.shop));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container content">
      <Cart />
      {isLoading ? <Loader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
    </div>
  );
}
