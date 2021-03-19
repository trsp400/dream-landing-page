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
  decision,
) => {
  const isYearOrMonthPeriod = yearOrMonth === 'anos' ? period * 12 : period;

  const achievedObjectiveCost =
    monthlySupport * isYearOrMonthPeriod + currentInvestments >= objectiveCost;

  const newPeriod = (objectiveCost - currentInvestments) / monthlySupport;
  const newPeriodParsed =
    newPeriod > parseInt(newPeriod.toFixed(0))
      ? parseInt(newPeriod.toFixed(0)) + 1
      : parseInt(newPeriod.toFixed(0));

  const trulyPeriod = achievedObjectiveCost
    ? newPeriodParsed
    : isYearOrMonthPeriod;

  const monthlyRate = calculateRate(
    trulyPeriod,
    monthlySupport,
    currentInvestments,
    objectiveCost,
  );

  const annualRate = parseFloat(monthlyRate * 12).toFixed(2);

  const riskProfile = checkRiskProfile(decision);

  const averageArray = handleGraphData(
    generateChunks,
    currentInvestments || 0,
    monthlySupport || 0,
    monthlyRate || 0,
    objectiveCost || 0,
    trulyPeriod || 0,
  );

  const yearlyAverageArray = generateGraphDataObject(
    averageArray,
    trulyPeriod,
    objectiveCost,
  );

  return {
    monthlyRate,
    annualRate,
    riskProfile,
    email,
    yearlyAverageArray,
    achievedObjectiveCost: achievedObjectiveCost || false,
    newPeriod: newPeriodParsed,
  };
};
