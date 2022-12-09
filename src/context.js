import { createContext, useReducer } from "react";
import reducer from "./redux/reducer";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
    toast.success("Goods added to basket successfully!");
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: itemId });
    toast.success(
      <p style={{ color: "red" }}>Goods deleted from basket successfully!</p>
    );
  };

  value.incrementQuantity = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: itemId });
    toast.info("Goods increased by one!");
  };

  value.decrementQuantity = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: itemId });
    toast.error("Goods decreased by one!");
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
