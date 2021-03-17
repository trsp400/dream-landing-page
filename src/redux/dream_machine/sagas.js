import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../services/api';

import {
  sendDreamMachineResultToAPISuccess,
  sendDreamMachineResultToAPIFailure,
} from './actions';

function* sendDreamMachineResultToAPIRequest(action) {
  try {
    const dataObject = {
      ...action?.payload?.result,
      ...action?.payload,
    };

    const { data } = yield call(
      api.post,
      'website/dream_machine_result',
      dataObject,
    );

    yield put(
      sendDreamMachineResultToAPISuccess({
        ...action?.payload,
        ...data,
      }),
    );
  } catch (error) {
    yield put(sendDreamMachineResultToAPIFailure());
  }
}

export default all([
  takeLatest(
    'dreamMachine/SEND_DREAM_MACHINE_RESULT_TO_API_REQUEST',
    sendDreamMachineResultToAPIRequest,
  ),
]);
