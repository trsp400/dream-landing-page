import { isNull } from 'lodash-es';
import actions from '../actions';

const INITIAL_STATE = {
  currentStep: null,
  direction: null,
  resultSuccess: null,
  comingFromLastStep: false,
  finishSimulation: false,
  result: {
    monthlyRate: '',
    annualRate: '',
    riskProfile: '',
    email: null,
    yearlyAverageArray: [],
    achievedObjectiveCost: false,
    newPeriod: 0,
    fileUrl: null,
  },
  path: '',
  objective: null,
  objectiveCost: '',
  period: null,
  yearOrMonth: 'anos',
  monthlySupport: null,
  currentInvestments: null,
  decision: {
    first: '',
    second: '',
    third: '',
  },
  monthlyLifeCost: null,
  monthlyIncome: null,
  investmentsPlacement: [],
  desiredInvestmentsPlacement: [],
  otherInvestments: null,
  currentAssets: [],
  // monthlyRate: '9.35',
  // annualRate: '112.20',
  // riskProfile: 'Arrojado',
  // name: '',
  // email: '',
  // phone: '',
  // yearlyAverageArray: [
  //   { Ano: 2021, Media: 17793.42 },
  //   { Ano: 2022, Media: 62293.07 },
  //   { Ano: 2023, Media: 100000 },
  //   { Ano: 2023, Media: 100000 },
  // ],
  // achievedObjectiveCost: false,
  // newPeriod: 186,
  // currentStep: 9,
  // direction: 'next',
  // resultSuccess: null,
  // comingFromLastStep: false,
  // finishSimulation: false,
  // result: {
  //   monthlyRate: '9.35',
  //   annualRate: '112.20',
  //   riskProfile: 'Arrojado',
  //   name: '',
  //   email: '',
  //   phone: '',
  //   yearlyAverageArray: [
  //     { Ano: 2021, Media: 17793.42 },
  //     { Ano: 2022, Media: 62293.07 },
  //     { Ano: 2023, Media: 100000 },
  //     { Ano: 2023, Media: 100000 },
  //   ],
  //   achievedObjectiveCost: false,
  //   newPeriod: 186,
  // },
  // path: 'beginner',
  // objective: 'CASAMENTO',
  // objectiveCost: 100000,
  // period: 2,
  // yearOrMonth: 'anos',
  // monthlySupport: 500,
  // currentInvestments: 7000,
  // decision: { first: 'Arrojado', second: 'Arrojado', third: 'Arrojado' },
  // monthlyLifeCost: null,
  // monthlyIncome: null,
  // investmentsPlacement: [],
  // desiredInvestmentsPlacement: [],
  // otherInvestments: null,
  // currentAssets: [],
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
        direction: payload?.direction,
        decision: {
          ...payload?.decision,
        },
        desiredInvestmentsPlacement: payload?.desiredInvestmentsPlacement,
        otherInvestments: payload?.otherInvestments,
        result: {
          ...payload?.result,
        },
        resultSuccess: payload?.resultSuccess || null,
        path: payload?.path,
        finishSimulation: payload?.finishSimulation,
      };
    case actions.SEND_DREAM_MACHINE_RESULT_TO_API_SUCCESS:
      return {
        ...state,
        result: { ...payload?.result, fileUrl: payload?.fileUrl },
        resultSuccess: true,
        comingFromLastStep: true,
      };
    case actions.SEND_DREAM_MACHINE_RESULT_TO_API_FAILURE:
      return {
        ...state,
        result: null,
        resultSuccess: null,
        comingFromLastStep: true,
      };
    default:
      return state;
  }
};
