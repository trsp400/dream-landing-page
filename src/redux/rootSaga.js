import { all } from 'redux-saga/effects';
import dreamMachineSagas from './dream_machine/sagas';

export default function* rootSaga() {
  return yield all([dreamMachineSagas]);
}
