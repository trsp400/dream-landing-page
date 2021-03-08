import { toast } from 'react-toastify';
import actions from '../actions';

import toastConfig from '../../utils/toastConfig';

const notify = message => toast(message, toastConfig);

const INITIAL_STATE = {
  isMobileView: false,
  size: 0,
  notify: message => notify(message),
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
