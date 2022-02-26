import { useContext } from 'react';

import { Button } from 'antd';

import Context from '../Context';

const Selector = () => {
  const { dispatch }: any = useContext(Context);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          dispatch({ type: 'Add' });
        }}
      >
        计数器
      </Button>
    </>
  );
};

export default Selector;
