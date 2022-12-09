export function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_BASKET":
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity + 1;
            return {
              ...item,
              quantity: newQuantity,
            };
          } else {
            return item;
          }
        }),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity > 0 ? item.quantity - 1 : 0,
            };
          } else {
            return item;
          }
        }),
      };

    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };

    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    default:
      return state;
  }
}
