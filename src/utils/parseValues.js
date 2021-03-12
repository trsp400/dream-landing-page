const parseCurrencyFloat = (value = 0) =>
  value
    ? parseFloat(value.replace('R$ ', '').replace(/\./g, '').replace(',', '.'))
    : 0;

const parseStringInt = (value = 0) => (value ? parseInt(value) : 0);

export { parseCurrencyFloat, parseStringInt };
