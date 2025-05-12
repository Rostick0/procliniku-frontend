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

export const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const groupWorkTimes = (workTimes: IClinicWorkTime[]) => {
  const grouped = [];

  // Перебираем дни и группируем одинаковые рабочие часы подряд
  for (let i = 0; i < workTimes.length; ) {
    let startDayIndex = i;

    while (
      i + 1 < workTimes.length &&
      workTimes[i].time_start === workTimes[i + 1].time_start &&
      workTimes[i].time_end === workTimes[i + 1].time_end &&
      workTimes[i].day + 1 === workTimes[i + 1].day
    ) {
      i++;
    }
    // Получаем диапазон дней и рабочее время
    const endDayIndex = i;
    const startDayKey = workTimes[startDayIndex].day;
    const endDayKey = workTimes[endDayIndex].day;

    const daysRange =
      `${weekdays[startDayKey]}` +
      (startDayKey !== endDayKey ? `-${weekdays[endDayIndex]}` : "");
    const hoursRange = `${workTimes[startDayIndex].time_start?.slice(
      0,
      5
    )}-${workTimes[startDayIndex].time_end?.slice(0, 5)}`;

    grouped.push(`${daysRange} ${hoursRange}`);

    i++; // Переходим к следующему дню
  }

  return grouped;
};
