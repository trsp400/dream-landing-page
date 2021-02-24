import actions from '../actions';

const INITIAL_STATE = {
  isMobileView: false,
};

export default function changeSettings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SCREEN_RESIZE:
      const { size } = action.payload; // eslint-disable-line

      if (size <= 768) {
        return {
          ...state,
          isMobileView: true,
        };
      }
      return {
        ...state,
        isMobileView: false,
      };

    default:
      return state;
  }
}
