import { isNull } from 'lodash-es';
import actions from '../actions';

const INITIAL_STATE = {
  currentStep: null,
  resultSuccess: null,
  result: {
    monthlyRate: 0,
    annualRate: 0,
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
          ...state?.result,
          email: payload?.result?.email,
        },
        resultSuccess: payload?.resultSuccess || null,
        path: payload?.path,
      };
    case actions.SEND_DREAM_MACHINE_RESULT_TO_API_SUCCESS:
      return {
        ...state,
        result: action?.payload?.result,
        resultSuccess: true,
      };
    case actions.SEND_DREAM_MACHINE_RESULT_TO_API_FAILURE:
      return {
        ...state,
        result: {},
        resultSuccess: false,
      };
    default:
      return state;
  }
};
