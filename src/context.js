import { createContext, useReducer } from "react";
import { toast } from "react-toastify";
import { reducer } from "./reducer";

export const shopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
};

export default function ContextProvider({ children }) {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
    toast.success("Goods added to basket successfully!");
  };

  value.incrementQuantity = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemId } });
    toast.info("Goods increased by one!");
  };

  value.decrementQuantity = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemId } });
    toast.error("Goods decreased by one!");
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
    toast.success(
      <p>
        Goods <span style={{ color: "red" }}>deleted</span> from basket
        successfully!
      </p>
    );
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
}
