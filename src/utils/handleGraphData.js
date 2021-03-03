import _ from 'lodash';

export function generateGraphDataObject(array, months, objectiveCost) {
  const yearsBetweenTodayAndObjectivePerid = [];
  const currentYear = new Date().getFullYear();

  const period = months || 12;

  const years = parseInt(period, 10) / 12 + 1;

  for (let i = 0; i < years; i++) {
    yearsBetweenTodayAndObjectivePerid.push(currentYear + i);
  }

  let incompleteYear = false;

  const arrayResult = array.map((item, index) => {
    const yieldDividedByMonths = item.value / item.length;

    incompleteYear = item.length < 12 && !incompleteYear;

    return {
      x: yearsBetweenTodayAndObjectivePerid[index],
      y: parseFloat(yieldDividedByMonths.toFixed(2)),
    };
  });

  incompleteYear &&
    arrayResult.push({
      x:
        yearsBetweenTodayAndObjectivePerid[
          yearsBetweenTodayAndObjectivePerid.length - 1
        ],
      y: parseFloat((objectiveCost || 0).toFixed(2)),
    });

  return arrayResult;
}

function returnAveragePerYear(chunkedArray) {
  return chunkedArray.map(chunk => {
    return {
      value: chunk.reduce((acc, current) => (acc += current), 0),
      length: chunk.length,
    };
  });
}

export function generateChunks(array, callback) {
  return callback(_.chunk(array, 12));
}

export default function handleGraphData(
  callback,
  currentValue,
  monthlyPayment,
  monthlyRate,
  objectiveCost,
  months,
) {
  console.log(currentValue, monthlyPayment, monthlyRate, objectiveCost, months);
  let firstTime = true;
  const arr = [];
  let monthlyYield;

  const yieldBetweenPeriod = [];

  const period = months || 1;

  for (let i = 0; i <= period; i++) {
    const j = i - 1;
    if (firstTime) {
      monthlyYield = currentValue * (monthlyRate / 100) + monthlyPayment;
      arr.push(currentValue + monthlyYield);
      firstTime = false;
    } else {
      monthlyYield = arr[j] * (monthlyRate / 100) + monthlyPayment;
      arr.push(arr[j] + monthlyYield);
      yieldBetweenPeriod.push(parseFloat(arr[j].toFixed(2)));
    }
  }

  const desiredValue = objectiveCost || 0;

  yieldBetweenPeriod.push(parseFloat(desiredValue.toFixed(2)));
  return callback(yieldBetweenPeriod, returnAveragePerYear);
}
