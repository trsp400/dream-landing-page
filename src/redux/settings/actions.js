export function screenResize(screenSize) {
  return {
    type: 'settings/SCREEN_RESIZE',
    payload: { screenSize },
  };
}
