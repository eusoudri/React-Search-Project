import { format } from 'date-fns';

const DEFAULT_FORMAT = 'dd/MM/yyyy';
const FULL_FORMAT = "EEEE, dd 'de' MMMM 'de' yyyy"; 

export const formatDate = (date: Date | string, formatStr = DEFAULT_FORMAT): string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  return format(parsedDate, formatStr);
};

export const formatFullDate = (date: Date | string): string => {
  return formatDate(date, FULL_FORMAT);
};
