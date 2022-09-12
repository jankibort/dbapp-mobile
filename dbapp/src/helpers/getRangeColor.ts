import { COLORS, SUGAR_LEVEL_RANGE } from '../constant';
import { TSugarLevelRangeValues } from '../Types/sugarRanges';

/**
 *
 * @param range defined range of sugar level ;
 * @returns related to that sugar level COLOR.
 */
export const getRangeColor = (range: TSugarLevelRangeValues) => {
  switch (range) {
    // most dangerous - should be avoided even short term
    case SUGAR_LEVEL_RANGE.HYPOGLYCEMIC:
      return COLORS.DANGER;
    // just fine
    case SUGAR_LEVEL_RANGE.NORMAL:
      return COLORS.SUCCESS;
    // unhealthy sugar level - should be avoided long term
    case SUGAR_LEVEL_RANGE.HYPERGLYCEMIC:
      return COLORS.WARNING;
  }
};
