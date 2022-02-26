import { createContext, useReducer } from 'react';

// 1. 创建全局 Context
const initial = { number: 0 };
const Context = createContext(initial);
export default Context;

// 2. 创建全局 reducer
export const reducer = (state = initial, action: any) => {
  console.log(action, state.number);
  switch (action.type) {
    case 'Add':
      return { number: state.number + 1 };
      break;

    default:
      break;
  }
};

// 3. 将全局 useReducer 返回的 state 和 dispatch 传递给全局 Context.Provider 的 value 中
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
