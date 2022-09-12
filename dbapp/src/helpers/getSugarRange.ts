import { NORMAL_SUGAR_LIMITS, SUGAR_LEVEL_RANGE } from '../constant';
import { TSugarLevelRangeValues } from '../Types/sugarRanges';

/**
 *For specyfic values check constant/diabetes.ts
 * @param value - ammout given in mg/dL (most popular measurement unit)
 * @returns Named range out of 3: Hypoglycemic (low sugar level in blood), Normal, Hiperglicemic (high sugar level in blood)
 */

export const getSugarRange = (value: number): TSugarLevelRangeValues => {
  switch (true) {
    case value < NORMAL_SUGAR_LIMITS.LOWER_LIMIT:
      return SUGAR_LEVEL_RANGE.HYPOGLYCEMIC;
    case value >= NORMAL_SUGAR_LIMITS.LOWER_LIMIT &&
      value < NORMAL_SUGAR_LIMITS.HIGHER_LIMIT:
      return SUGAR_LEVEL_RANGE.NORMAL;
    case value >= NORMAL_SUGAR_LIMITS.HIGHER_LIMIT:
      return SUGAR_LEVEL_RANGE.HYPERGLYCEMIC;
    default:
      return SUGAR_LEVEL_RANGE.NORMAL;
  }
};
