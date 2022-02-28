import './App.css';
import 'antd/dist/antd.css';

import { Provider } from './Context';
import Selector from './Selector';
import Displayer from './Displayer';

const App = () => {
  return (
    <>
      <Provider value={0}>
        <Selector />
        <Displayer />
      </Provider>
    </>
  );
};

export default App;

// https://segmentfault.com/a/1190000021935005
