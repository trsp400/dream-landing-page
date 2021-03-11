const parseCurrencyFloat = (value = 0) =>
  value
    ? parseFloat(value.replace(/R$/g, '').replace(/\./g, '').replace(/,/g, '.'))
    : 0;

const parseStringInt = (value = 0) => (value ? parseInt(value) : 0);

export { parseCurrencyFloat, parseStringInt };
