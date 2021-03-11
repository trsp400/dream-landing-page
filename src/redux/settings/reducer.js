import { toast } from 'react-toastify';
import actions from '../actions';

import toastConfig from '../../utils/toastConfig';

const notify = message => toast(message, toastConfig);

const INITIAL_STATE = {
  isMobileView: false,
  screenSize: 0,
  notify: message => notify(message),
};

export default function changeSettings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SCREEN_RESIZE:
      const { screenSize } = action.payload; // eslint-disable-line

      if (screenSize <= 1024) {
        return {
          ...state,
          screenSize,
          isMobileView: true,
        };
      }
      return {
        ...state,
        screenSize,
        isMobileView: false,
      };

    default:
      return state;
  }
}
