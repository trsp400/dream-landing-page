import actions from '../actions';

const INITIAL_STATE = {
  isMobileView: false,
  size: 0,
};

export default function changeSettings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SCREEN_RESIZE:
      const { size } = action.payload; // eslint-disable-line

      if (size <= 768) {
        return {
          ...state,
          size,
          isMobileView: true,
        };
      }
      return {
        ...state,
        size,
        isMobileView: false,
      };

    default:
      return state;
  }
}
