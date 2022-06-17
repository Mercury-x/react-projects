import { useReducer } from 'react';
import data from './data';

const initialState = data;

// 深拷贝state
const deepClone = (state) => {
  if (typeof state === 'object') {
    return {
      ...state,
    };
  }
};

function reducer(state, action) {
  const newCart = state.map((value) => deepClone(value));
  const idx = newCart.findIndex((item) => item.id === action.id);

  if (action.type === 'increase') {
    newCart[idx].amount += 1;
    return newCart;
  } else if (action.type === 'decrease') {
    newCart[idx].amount -= 1;
    if (newCart[idx].amount === 0) {
      newCart.splice(idx, 1);
    }
    return newCart;
  } else if (action.type === 'remove') {
    return [];
  }
}

export const useCart = () => {
  return useReducer(reducer, initialState);
};
