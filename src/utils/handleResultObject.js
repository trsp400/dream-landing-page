import calculateRate from './calculateRate';
import checkRiskProfile from './checkInvestorRiskProfile';

import handleGraphData, {
  generateChunks,
  generateGraphDataObject,
} from './handleGraphData';

export const createResultObject = (
  period,
  yearOrMonth,
  monthlySupport,
  currentInvestments,
  objectiveCost,
  email,
) => {
  const isYearOrMonthPeriod = yearOrMonth === 'anos' ? period * 12 : period;

  const guessValue = isYearOrMonthPeriod > 120 ? 0.1 : 0.2;

  const monthlyRate = parseFloat(
    calculateRate(
      isYearOrMonthPeriod,
      -monthlySupport || -0,
      -currentInvestments || -0,
      objectiveCost || 0,
      0,
      guessValue,
    ) * 100,
  ).toFixed(2);

  const annualRate = parseFloat(monthlyRate * 12).toFixed(2);

  // const riskProfile = checkRiskProfile(stepThree?.currentAssets);

  const averageArray = handleGraphData(
    generateChunks,
    currentInvestments || 0,
    monthlySupport || 0,
    monthlyRate || 0,
    objectiveCost || 0,
    isYearOrMonthPeriod || 0,
  );

  const yearlyAverageArray = generateGraphDataObject(
    averageArray,
    isYearOrMonthPeriod,
    objectiveCost,
  );

  return {
    monthlyRate,
    annualRate,
    // riskProfile,
    email,
    yearlyAverageArray,
  };
};
