import { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';

import { DataProcessor } from '../utils/DataProcessor';

const Chart = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [chartOption, setChartOption] = useState({});
  const chartRef: any = useRef(null);
  const [echartsInstance, setEchartsInstance] = useState<echarts.EChartsType>();

  useEffect(() => {
    const getData = async () => {
      const data = await DataProcessor().then((data) => {
        console.log(data);
        return data;
      });
      setChartOption(data);
    };
    getData();
  }, []);

  useEffect(() => {
    let chart = echarts.getInstanceByDom(chartRef.current);
    if (!chart) chart = echarts.init(chartRef.current);

    const resizeOb = new ResizeObserver((entries) => {
      entries.forEach((entry) =>
        echarts.getInstanceByDom(entry.target).resize()
      );
    });
    resizeOb.observe(chartRef.current);

    setEchartsInstance(chart);
  }, []);

  useEffect(() => {
    if (echartsInstance && chartOption) echartsInstance.setOption(chartOption);
  }, [echartsInstance, chartOption]);

  return (
    <>
      <div ref={chartRef} style={{ width: '100%', height: 400 }}></div>
    </>
  );
};

export default Chart;
