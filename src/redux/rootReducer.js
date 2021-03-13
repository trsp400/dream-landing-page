import { combineReducers } from 'redux';

import settings from './settings/reducer';
import dreamMachine from './dream_machine/reducer';
import theme from './themes/reducer';

export default combineReducers({
  settings,
  dreamMachine,
  theme,
});
