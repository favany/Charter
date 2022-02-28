type IInput = {
  option: any;
  python: any;
  pov: any;
};

const DataProcessor: () => Record<string, any> = () => {
  setTimeout(() => {}, 3000);
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
  return new Promise((resolve, reject) => {
    resolve(option);
  });
};

export { DataProcessor };
