import { useContext } from 'react';

import Context from '../Context';

const Displayer = () => {
  const { state }: any = useContext(Context);
  console.log(state);
  return (
    <>
      <h1>Displayer: {state.number}</h1>
    </>
  );
};

export default Displayer;
