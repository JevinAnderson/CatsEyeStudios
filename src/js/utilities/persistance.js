const STATE_KEY = 'CATSEYESTUDIOS_REDUX_STATE';

export const saveState = state => {
  try {
    const { loader, ...rest } = state;

    const serializedState = JSON.stringify(rest);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (error) {
    //No-op
  }
};

export function loadState() {
  try {
    const serializedState = localStorage.getItem(STATE_KEY);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}
