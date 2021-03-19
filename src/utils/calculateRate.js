export default (period, monthlyPayment, currentValue, objectiveCost) => {
  const achievedObjectiveCost =
    monthlyPayment * period + currentValue >= objectiveCost;

  if (achievedObjectiveCost) return '0';

  for (let taxUnit = 0; taxUnit <= 1000000; taxUnit++) {
    let firstTime = true;
    const arrUnidade = [];
    let monthlyYield;
    let monthlyYieldSumMonthlyPayment;
    for (let k = 1; k <= period; k++) {
      const texJ = k - 2;
      if (firstTime) {
        monthlyYield = currentValue * (taxUnit / 100);
        monthlyYieldSumMonthlyPayment = monthlyYield + monthlyPayment;
        arrUnidade.push(currentValue + monthlyYieldSumMonthlyPayment);
        firstTime = false;
      } else {
        monthlyYield = arrUnidade[texJ] * (taxUnit / 100);
        monthlyYieldSumMonthlyPayment = monthlyYield + monthlyPayment;
        arrUnidade.push(arrUnidade[texJ] + monthlyYieldSumMonthlyPayment);
      }
    }

    if (arrUnidade[arrUnidade.length - 1] > objectiveCost) {
      for (let taxDecimal = 0; taxDecimal <= 9; taxDecimal++) {
        for (let taxCentesimal = 0; taxCentesimal <= 9; taxCentesimal++) {
          const arrDecimal = [];
          let firstTime = true;
          let monthlyYield;
          let monthlyYieldSumMonthlyPayment;
          const taxTrusty = `${taxUnit - 1}.${taxDecimal}${taxCentesimal}`;
          for (let g = 1; g <= period; g++) {
            const texJ = g - 2;
            if (firstTime) {
              monthlyYield = currentValue * (taxTrusty / 100);
              monthlyYieldSumMonthlyPayment = monthlyYield + monthlyPayment;
              arrDecimal.push(currentValue + monthlyYieldSumMonthlyPayment);
              firstTime = false;
            } else {
              monthlyYield = arrDecimal[texJ] * (taxTrusty / 100);
              monthlyYieldSumMonthlyPayment = monthlyYield + monthlyPayment;
              arrDecimal.push(arrDecimal[texJ] + monthlyYieldSumMonthlyPayment);
            }

            if (arrDecimal[arrDecimal.length - 1] > objectiveCost) {
              return taxTrusty;
            }
          }
        }
      }
    }
  }
};
