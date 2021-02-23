export function screenResize(size) {
  return {
    type: 'settings/SCREEN_RESIZE',
    payload: { size },
  };
}
