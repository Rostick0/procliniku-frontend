import moment from "moment";
import type IClinicWorkTime from "~/interfaces/models/ClinicWorkTime";

export const isCurrentYear = (date: Date | number | string) =>
  new Date().getFullYear() === new Date(date).getFullYear();

export const dateFormat = "YYYY-MM-DD";
export const dateTimeFormat = `${dateFormat} HH:mm:ss`;

export const dateTimeUsabilityFormat = (date: Date | number | string) =>
  moment(date).format("DD " + (isCurrentYear(date) ? "MMMM" : "MM YY"));

export const convertToMilliseconds = (seconds: number) => seconds * 1000;

export const getYearsString = (years: number): string => {
  const absYears = Math.abs(years) % 100;
  const lastDigit = absYears % 10;

  if (absYears > 10 && absYears < 20) return `${years} лет`;

  switch (lastDigit) {
    case 1:
      return `${years} год`;
    case 2:
    case 3:
    case 4:
      return `${years} года`;
    default:
      return `${years} лет`;
  }
};

export const convertTimeToEdit = (timeString: string) => {
  if (!timeString)
    return {
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  const timeSplit = timeString?.split?.(":");

  return {
    hours: timeSplit?.[0],
    minutes: timeSplit?.[1],
    seconds: timeSplit?.[2],
  };
};

export const convertTimeWorkToDefault = (
  day: number,
  workTimes?: IClinicWorkTime[]
) => {
  const workTimeDefault = workTimes?.find((item) => item.day === day);

  return workTimeDefault
    ? [
        convertTimeToEdit(workTimeDefault.time_start),
        convertTimeToEdit(workTimeDefault.time_end),
      ]
    : "";
};
