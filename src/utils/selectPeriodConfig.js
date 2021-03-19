export default {
  control: styles => ({
    ...styles,
    border: '1px solid #EA5E45',
    boxShadow: 'none',
    backgroundColor: '#1A4A73',
    width: '150px',
    padding: 4,
    fontSize: 15,
    fontColor: '#FFF',
    color: '#FFF',
    '&:hover': {
      border: '1px solid #EA5E45',
    },
    cursor: 'pointer',
  }),

  option: styles => {
    return {
      ...styles,
      backgroundColor: '#1A4A73',
      borderColor: '#1A4A73',
      fontColor: '#FFF',
      color: '#FFF',
      fontSize: 20,
      margin: 0,
      cursor: 'pointer',
    };
  },
  singleValue: styles => {
    return {
      ...styles,
      backgroundColor: '#1A4A73',
      borderColor: '#1A4A73',
      fontColor: '#FFF',
      color: '#FFF',
      fontSize: 20,
      margin: 0,
      cursor: 'pointer',
    };
  },
  menuList: base => ({
    ...base,
    padding: 0,
  }),
  indicatorsContainer: (styles, state) => ({
    border: 0,
    '&:hover': {
      color: '#FFF',
    },
  }),
};
