import { useContext } from 'react';

import { Row, Col } from 'antd';

import Context from '../Context';
import Chart from '../Chart';

const option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '1月', '2月', '3月', '4月', '5月', '6月'],
      ['Actual', 120, 132, 101, '-', '-', '-', '-'],
      ['Budget', 120, 178, 70, 134, 90, 230, 210],
    ],
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
  ],
};

const Displayer = () => {
  const { state }: any = useContext(Context);
  console.log(state);

  return (
    <>
      <h1>Displayer: {state.number}</h1>
      <Row>
        <Col span={12}>
          <Chart />
        </Col>
        <Col span={12}>col-12</Col>
      </Row>
    </>
  );
};

export default Displayer;
