import React, { memo, useState, useEffect } from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryTooltip,
  Curve,
  VictoryClipContainer,
  VictoryLabel,
  VictoryAxis,
  VictoryContainer,
  VictoryVoronoiContainer,
} from 'victory';

import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Annotation,
  Shape,
  Facet,
  Util,
  Slider,
} from 'bizcharts';

interface LineChartProps {
  isMobileView: Boolean;
}

const LineChart: React.FC<LineChartProps> = ({ isMobileView }) => {
  const data = [
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

  const cols = {
    x: {
      type: 'cat',
      alias: 'teste',
      tickCount: 10,
    },
  };

  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = ev => {
    setWidth(ev.target.innerWidth);
  };

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

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    console.log(width);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <Chart
      height={400}
      data={data}
      scale={cols}
      autoFit
      interactions={['element-active']}
      appendPadding={10}
      pure
    >
      <Legend position="top-left" visible={false} />
      <Axis name="x" animate />
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
        }}
      />
      <Tooltip
        useHtml
        g2-tooltip={{
          boxShadow: 'none',
          color: '#fff',
          backgroundColor: '#222',
        }}
        style={{
          color: 'red',
        }}
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
        color={'#EA5E45'}
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
        shape={'circle'}
        color={'#EA5E45'}
        style={{
          stroke: '#fff',
          lineWidth: 1,
        }}
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

      <Slider />
    </Chart>
    // <svg
    //   viewBox={'0 0' + ' ' + width + ' ' + '350'}
    //   preserveAspectRatio="none"
    //   width="100%"
    // >
    //   <VictoryChart
    //     standalone={false}
    //     width={width}
    //     style={{
    //       parent: {
    //         maxWidth: '100%',
    //       },
    //     }}
    //     containerComponent={
    //       <VictoryVoronoiContainer
    //         voronoiDimension="x"
    //         labels={({ datum }) => `y: ${datum.y}`}
    //         labelComponent={
    //           <VictoryTooltip
    //             cornerRadius={0}
    //             flyoutStyle={{ fill: 'white' }}
    //           />
    //         }
    //       />
    //     }
    //     padding={
    //       isMobileView
    //         ? { left: 90, top: 50, bottom: 10, right: 20 }
    //         : { left: 200, top: 50, bottom: 50, right: 100 }
    //     }
    //   >
    //     <VictoryAxis
    //       tickValues={data.map(object => object.x)}
    //       tickFormat={tick => `${tick}`}
    //       axisLabelComponent={
    //         <VictoryLabel
    //           style={{
    //             color: '#FFF',
    //             textDecorationColor: '#FFF',
    //           }}
    //           dy={30}
    //         />
    //       }
    //       tickLabelComponent={<VictoryLabel angle={45} dx={15} />}
    //       tickCount={
    //         isMobileView ? (data.length > 5 ? 4 : data.length) : data.length
    //       }
    //       label={'Tempo'}
    //     />
    //     <VictoryAxis
    //       dependentAxis
    //       tickValues={data.map(object => object.y)}
    //       tickFormat={tick =>
    //         isMobileView
    //           ? formatNumberToInternationalSystem(tick, 1)
    //           : new Intl.NumberFormat('pt-BR', {
    //               style: 'currency',
    //               currency: 'BRL',
    //             }).format(tick)
    //       }
    //       axisLabelComponent={<VictoryLabel dy={isMobileView ? -40 : -110} />}
    //       label={'Crescimento financeiro'}
    //     />

    //     <VictoryLine
    //       animate={{
    //         duration: 3000,
    //         onLoad: { duration: 3000 },
    //       }}
    //       style={{
    //         data: {
    //           stroke: '#EA5E45',
    //           strokeWidth: ({ active }) => (active ? 4 : 2),
    //         },
    //         labels: { fill: '#EA5E45' },
    //       }}
    //       data={data}
    //       dataComponent={<Curve />}
    //       groupComponent={
    //         <VictoryClipContainer
    //           clipPadding={{ top: 2000, right: 150, left: 150 }}
    //         />
    //       }
    //       containerComponent={<VictoryContainer responsive={false} />}
    //       interpolation="natural"
    //       labelComponent={
    //         <VictoryLabel
    //           dy={() => {
    //             if (width >= 769) return -5;
    //           }}
    //           dx={() => {
    //             if (width >= 769) return 45;
    //           }}
    //           style={{
    //             color: '#FFF',
    //             fontSize: 10,
    //             angle: isMobileView ? 0 : -45,
    //           }}
    //         />
    //       }
    //       labels={({ datum }) =>
    //         isMobileView
    //           ? ''
    //           : new Intl.NumberFormat('pt-BR', {
    //               style: 'currency',
    //               currency: 'BRL',
    //             }).format(datum.y)
    //       }
    //     />
    //   </VictoryChart>
    // </svg>
  );
};

export default memo(LineChart);
