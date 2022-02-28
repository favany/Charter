interface IContentType {
  number: number;
  dispatch: Function;
}

type Props = React.PropsWithChildren<{
  value: number;
}>;

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
      return { number: state.number + 52 };
      break;

    default:
      break;
  }
};

// 3. 将全局 useReducer 返回的 state 和 dispatch 传递给全局 Context.Provider 的 value 中
export const Provider: React.FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  const value = { state, dispatch };

  return (
    <Context.Provider value={value as unknown as IContentType}>
      {children}
    </Context.Provider>
  );
};
