import {
  ACTIVE_INSULINE_SUGAR_INCREASEMENT,
  DESIRED_SUGAR_LEVEL,
  NONACTIVE_INSULINE_SUGAR_INCREASEMENT,
  PT_TO_CARBS_MULT,
} from '../constant';

/**
 * @param latestSugarValue sugar level in md/dL
 * @param isInsulinActive true if differenceInMinutes() between current time and latest injection is `< TIME_INSULIN_ACTIVE` defined in constant/diabetes
 * @returns carbohydrates grams that are being required to consume to fall in NORMAL range of sugar level
 */
export const getCarboRequirement = (
  latestSugarValue: number,
  isInsulinActive: boolean,
): number => {
  // TODO: Non-mvp Adjust desired sugar level and active insulin increasement value depending on user habbits and patterns
  return Math.round(
    ((DESIRED_SUGAR_LEVEL - latestSugarValue) * PT_TO_CARBS_MULT) /
      (isInsulinActive
        ? ACTIVE_INSULINE_SUGAR_INCREASEMENT
        : NONACTIVE_INSULINE_SUGAR_INCREASEMENT),
  );
};
