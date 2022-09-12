import { SUGAR_LEVEL_RANGE } from '../constant';

export type TSugarLevelRange = keyof typeof SUGAR_LEVEL_RANGE;

export type TSugarLevelRangeValues = typeof SUGAR_LEVEL_RANGE[TSugarLevelRange];
