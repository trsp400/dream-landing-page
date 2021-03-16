const parseCurrencyFloat = (value = 0) =>
  typeof value === 'string'
    ? parseFloat(value.replace('R$ ', '').replace(/\./g, '').replace(',', '.'))
    : value;

const parseStringInt = (value = 0) => (value ? parseInt(value) : 0);

export { parseCurrencyFloat, parseStringInt };
