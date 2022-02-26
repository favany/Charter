import './App.css';
import 'antd/dist/antd.css';

import { Provider } from './Context';
import Selector from './Selector';
import Displayer from './Displayer';

const App = () => {
  return (
    <>
      <h1>你好，美好的一切从这里开始</h1>
      <Provider value={0}>
        <Selector />
        <Displayer />
      </Provider>
    </>
  );
};

export default App;

// https://segmentfault.com/a/1190000021935005
