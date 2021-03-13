import { desktopTheme, mobileTheme } from '../../themes/default';

const INITIAL_STATE = {
  defaultTheme: {
    desktopTheme,
    mobileTheme,
  },
};

export default function themeReducer(state = INITIAL_STATE) {
  return state;
}
