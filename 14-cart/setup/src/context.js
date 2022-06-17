import React, { useState, useContext, useReducer, useEffect } from 'react';
// import cartItems from './data'
// import reducer from './reducer'
import { useCart } from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems)
  const [cart, setCart] = useCart();
  const [total, setTotal] = useState(0.0);

  // cart变动时，重新计算总价格
  useEffect(() => {
    const total = cart.reduce(
      (prev, cur) => prev + cur.amount * cur.price,
      0.0
    );
    setTotal(total.toFixed(2));
  }, [cart]);

  // 增加某个单品的数量
  const addItemAmount = (id) => {
    setCart({
      type: 'increase',
      id,
    });
  };

  // 减少某个商品的数量
  const delItemAmount = (id) => {
    setCart({
      type: 'decrease',
      id,
    });
  };

  // 移除所有商品
  const removeItem = (id) => {
    setCart({
      type: 'remove',
    });
  };
  return (
    <AppContext.Provider
      value={{
        cart,
        total,
        addItemAmount,
        delItemAmount,
        removeItem,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
