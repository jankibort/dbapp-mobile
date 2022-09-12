/**
 * Helpers related to date/time calculations
 */

import { format } from 'date-fns';

export const getTimeFormatInHHmm = (dateTime: Date) => {
  return format(dateTime, 'HH:mm');
};
