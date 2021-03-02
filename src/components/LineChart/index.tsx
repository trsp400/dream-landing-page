import React, { memo } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Slider } from 'bizcharts';

interface LineChartProps {
  isMobileView: Boolean;
  data: Array<Object>;
  slider: Boolean;
  height: Number;
  lineColor: string;
}

const LineChart: React.FC<LineChartProps> = ({
  isMobileView,
  data,
  slider,
  height,
  lineColor,
}) => {
  const fakeData = [
    { x: 2021, y: '7199.66' },
    { x: 2022, y: '19849.63' },
    { x: 2023, y: '41179.62' },
    { x: 2024, y: '77145.61' },
    { x: 2025, y: '137790.38' },
    { x: 2026, y: '240047.77' },
    { x: 2027, y: '412471.11' },
    { x: 2028, y: '703206.14' },
    { x: 2029, y: '1193434.79' },
    { x: 2030, y: '1500000' },
  ];

  const formatNumberToInternationalSystem = (num, digits) => {
    const si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];
    const formatter = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;

    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (
      (num / si[i].value).toFixed(digits).replace(formatter, '$1') +
      si[i].symbol
    );
  };

  return (
    <Chart
      height={height}
      data={data?.length ? data : fakeData}
      scale={{
        x: {
          type: 'cat',
          tickCount: data?.length || 10,
        },
      }}
      autoFit
      appendPadding={10}
    >
      <Legend position="top-left" visible={false} />
      <Axis
        name="x"
        animate
        label={{
          style: {
            fill: '#FFF',
          },
        }}
      />
      <Axis
        name="y"
        label={{
          formatter: val =>
            isMobileView
              ? formatNumberToInternationalSystem(val, 1)
              : new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(parseFloat(val)),
          style: {
            fill: '#FFF',
          },
        }}
      />
      <Tooltip
        useHtml
        g2-tooltip={{
          boxShadow: 'none',
          color: '#fff',
          backgroundColor: '#222',
        }}
        enterable={false}
        itemTpl={
          '<li data-index={index}>' +
          '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' +
          `Valor: {value}` +
          '</li>'
        }
      />
      <Geom
        animate
        type="line"
        position="x*y"
        size={2}
        color={lineColor || '#EA5E45'}
        tooltip={[
          'x*y',
          (x, y) => {
            return {
              name: x,
              value: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(y),
            };
          },
        ]}
      />
      <Geom
        type="point"
        position="x*y"
        size={4}
        shape=""
        color={'#EA5E45'}
        style={{
          stroke: '#fff',
          lineWidth: 1,
        }}
        tooltip={[
          'x*y',
          (x, y) => {
            return {
              title: x,
              value: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(y),
            };
          },
        ]}
        label={[
          'y',
          yValue => {
            return {
              content: isMobileView
                ? ''
                : new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(yValue),
              style: {
                fill: '#EA5E45',
              },
            };
          },
        ]}
      />

      {slider ? <Slider /> : null}
    </Chart>
  );
};

export default memo(LineChart);
