import actions from '../actions';

const INITIAL_STATE = {
  currentStep: 0,
  resultSuccess: null,
  result: {
    monthlyRate: 0,
    annualRate: 0,
    riskProfile: '',
    email: '',
    yearlyAverageArray: [],
  },
  path: '',
  objective: '',
  objectiveCost: 0,
  period: '',
  yearOrMonth: 'anos',
  monthlySupport: 0,
  currentInvestments: 0,
  monthlyLifeCost: 0,
  monthlyIncome: 0,
  investmentsPlacement: [],
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
