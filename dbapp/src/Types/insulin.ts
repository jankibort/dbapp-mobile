export interface IInsulin {
  type: InsulinType;
  activeDuration: number | string;
  peakStart: number | string;
  peakEnd: number | string;
}

export type InsulinType = 'longActing' | 'rapidActing';
