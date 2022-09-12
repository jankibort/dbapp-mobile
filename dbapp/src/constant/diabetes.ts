// Named ranges of sugar level
export const SUGAR_LEVEL_RANGE = {
  // low
  HYPOGLYCEMIC: 'hypoglycemia',
  // normal
  NORMAL: 'normal',
  // high
  HYPERGLYCEMIC: 'hyperglycemic',
} as const;

/**
 * Range limit of normal (healthy) sugar range.
 * Bottom limit is 70 mg/dL
 * Higher limit is 130 mg/dL
 */
export const NORMAL_SUGAR_LIMITS = {
  LOWER_LIMIT: 70,
  HIGHER_LIMIT: 130,
};

/**
 * Rapid-acting insulin is active 3h
 */
export const TIME_INSULIN_ACTIVE = 180;

/**
 * multiplier scaling portion of carbs to ammount of grams of Carbohydrates. 1 portion stands for 10 grams of carbs
 */
export const PT_TO_CARBS_MULT = 10;

/**
 * Value that typicaly is raised after consuming 1portion of carbs when insulin is ACTIVE
 */
export const ACTIVE_INSULINE_SUGAR_INCREASEMENT = 20;

/**
 * Value that typicaly is raised after consuming 1portion of carbs when insulin is NOT_ACTIVE
 */
export const NONACTIVE_INSULINE_SUGAR_INCREASEMENT = 40;

/**
 * Minimal sugar level being desired after hypoglicemic
 */
export const DESIRED_SUGAR_LEVEL = 130;
