import { isNull } from 'lodash-es';
import actions from '../actions';

const INITIAL_STATE = {
  currentStep: 0,
  resultSuccess: null,
  result: {
    monthlyRate: '',
    annualRate: '',
    riskProfile: '',
    email: '',
    yearlyAverageArray: [],
  },
  path: '',
  objective: null,
  objectiveCost: '',
  period: null,
  yearOrMonth: 'anos',
  monthlySupport: null,
  currentInvestments: null,
  decision: null,
  monthlyLifeCost: null,
  monthlyIncome: null,
  investmentsPlacement: [],
  desiredInvestmentsPlacement: [],
  otherInvestments: null,
  currentAssets: [],
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case actions.CHANGE_FORM_STATE:
      return {
        ...state,
        objective: payload?.objective,
        objectiveCost: payload?.objectiveCost,
        period: payload?.period,
        yearOrMonth: payload?.yearOrMonth,
        monthlySupport: payload?.monthlySupport,
        currentInvestments: payload?.currentInvestments,
        monthlyLifeCost: payload?.monthlyLifeCost,
        monthlyIncome: payload?.monthlyIncome,
        investmentsPlacement: payload?.investmentsPlacement,
        currentAssets: payload?.currentAssets,
        currentStep: payload?.currentStep,
        decision: payload?.decision,
        desiredInvestmentsPlacement: payload?.desiredInvestmentsPlacement,
        otherInvestments: payload?.otherInvestments,
        result: {
          ...payload?.result,
        },
        resultSuccess: payload?.resultSuccess || null,
        path: payload?.path,
      };
    case actions.SEND_DREAM_MACHINE_RESULT_TO_API_SUCCESS:
      return {
        ...state,
        ...state.stepOne,
        ...state.stepTwo,
        ...state.stepThree,
        result: action?.payload?.result,
        resultSuccess: true,
      };
    case actions.SEND_DREAM_MACHINE_RESULT_TO_API_FAILURE:
      return {
        ...state,
        ...state.stepOne,
        ...state.stepTwo,
        ...state.stepThree,
        result: {},
        resultSuccess: false,
      };
    default:
      return state;
  }
};
