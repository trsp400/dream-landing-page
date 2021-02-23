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
  stepOne: {
    objective: '',
    objectiveCost: 0,
    period: '',
    yearOrMonth: 'anos',
  },
  stepTwo: {
    monthlySupport: 0,
    currentInvestments: 0,
    monthlyLifeCost: 0,
    monthlyIncome: 0,
  },
  stepThree: {
    investmentsPlacement: [],
    currentAssets: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  const stepOne = action?.payload?.stepOne;
  const stepTwo = action?.payload?.stepTwo;
  const stepThree = action?.payload?.stepThree;

  switch (action.type) {
    case actions.CHANGE_FORM_STATE:
      return {
        ...state,
        stepOne: {
          ...state.stepOne,
          objective: stepOne?.objective,
          objectiveCost: stepOne?.objectiveCost,
          period: stepOne?.period,
          yearOrMonth: stepOne?.yearOrMonth,
        },
        stepTwo: {
          ...state.stepTwo,
          monthlySupport: stepTwo?.monthlySupport,
          currentInvestments: stepTwo?.currentInvestments,
          monthlyLifeCost: stepTwo?.monthlyLifeCost,
          monthlyIncome: stepTwo?.monthlyIncome,
        },
        stepThree: {
          ...state.stepThree,
          investmentsPlacement: stepThree?.investmentsPlacement,
          currentAssets: stepThree?.currentAssets,
        },
        currentStep: action?.payload?.currentStep,
        result: action?.payload?.result,
        resultSuccess: action?.payload?.resultSuccess || null,
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
