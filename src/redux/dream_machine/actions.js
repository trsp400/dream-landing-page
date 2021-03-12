export function changeFormState(payload) {
  return {
    type: 'dreamMachine/CHANGE_FORM_STATE',
    payload,
  };
}

export function sendDreamMachineResultToAPIRequest(payload) {
  return {
    type: 'dreamMachine/SEND_DREAM_MACHINE_RESULT_TO_API_REQUEST',
    payload,
  };
}

export function sendDreamMachineResultToAPISuccess(payload) {
  return {
    type: 'dreamMachine/SEND_DREAM_MACHINE_RESULT_TO_API_SUCCESS',
    payload,
  };
}

export function sendDreamMachineResultToAPIFailure(payload) {
  return {
    type: 'dreamMachine/SEND_DREAM_MACHINE_RESULT_TO_API_FAILURE',
    payload,
  };
}
