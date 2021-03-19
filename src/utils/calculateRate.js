export default (periods, payment, present, future) => {
  const achievedFuture = payment * periods + present >= future;

  if (achievedFuture) return '0';

  for (let rateUnit = 0; rateUnit <= 1000000; rateUnit++) {
    let firstTime = true;
    const arrUnit = [];
    let monthlyYield;
    let monthlyYieldSumPayment;
    for (let k = 1; k <= periods; k++) {
      const j = k - 2;
      if (firstTime) {
        monthlyYield = present * (rateUnit / 100);
        monthlyYieldSumPayment = monthlyYield + payment;
        arrUnit.push(present + monthlyYieldSumPayment);
        firstTime = false;
      } else {
        monthlyYield = arrUnit[j] * (rateUnit / 100);
        monthlyYieldSumPayment = monthlyYield + payment;
        arrUnit.push(arrUnit[j] + monthlyYieldSumPayment);
      }
    }

    if (arrUnit[arrUnit.length - 1] > future) {
      for (let rateDecimal = 0; rateDecimal <= 9; rateDecimal++) {
        for (let rateCentesimal = 0; rateCentesimal <= 9; rateCentesimal++) {
          const arr = [];
          let firstTime = true;
          let monthlyYield;
          let monthlyYieldSumPayment;
          const rateTrusty = `${rateUnit - 1}.${rateDecimal}${rateCentesimal}`;
          for (let g = 1; g <= periods; g++) {
            const j = g - 2;
            if (firstTime) {
              monthlyYield = present * (rateTrusty / 100);
              monthlyYieldSumPayment = monthlyYield + payment;
              arr.push(present + monthlyYieldSumPayment);
              firstTime = false;
            } else {
              monthlyYield = arr[j] * (rateTrusty / 100);
              monthlyYieldSumPayment = monthlyYield + payment;
              arr.push(arr[j] + monthlyYieldSumPayment);
            }

            if (arr[arr.length - 1] > future) {
              return rateTrusty;
            }
          }
        }
      }
    }
  }
};
