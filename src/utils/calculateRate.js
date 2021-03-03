const error = require('./lib/error');
const utils = require('./lib/common');

export default (periods, payment, present, future, type, guess) => {
  console.log(periods, payment, present, future, type, guess);
  guess = guess === undefined ? 0.01 : guess;
  future = future === undefined ? 0 : future;
  type = type === undefined ? 0 : type;

  periods = utils.parseNumber(periods);
  payment = utils.parseNumber(payment);
  present = utils.parseNumber(present);
  future = utils.parseNumber(future);
  type = utils.parseNumber(type);
  guess = utils.parseNumber(guess);
  if (utils.anyIsError(periods, payment, present, future, type, guess)) {
    return error.value;
  }

  const epsMax = 1e-10;
  const iterMax = 20;
  let rate = guess;

  type = type ? 1 : 0;
  for (let i = 0; i < iterMax; i++) {
    if (rate <= -1) {
      return error.num;
    }
    let y;
    let f;
    if (Math.abs(rate) < epsMax) {
      y =
        present * (1 + periods * rate) +
        payment * (1 + rate * type) * periods +
        future;
    } else {
      f = Math.pow(1 + rate, periods);
      y = present * f + payment * (1 / rate + type) * (f - 1) + future;
    }
    if (Math.abs(y) < epsMax) {
      return rate;
    }
    let dy;
    if (Math.abs(rate) < epsMax) {
      dy = present * periods + payment * type * periods;
    } else {
      f = Math.pow(1 + rate, periods);
      const df = periods * Math.pow(1 + rate, periods - 1);
      dy =
        present * df +
        payment * (1 / rate + type) * df +
        payment * (-1 / (rate * rate)) * (f - 1);
    }
    rate -= y / dy;
  }

  return rate;
};
