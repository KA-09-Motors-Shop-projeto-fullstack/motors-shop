import moment from "moment";

export const compareDiffDates = (date: string) => {
  const diffSeconds = moment().diff(date, "seconds");
  const diffMinutes = moment().diff(date, "minutes");
  const diffHours = moment().diff(date, "hours");
  const diffDays = moment().diff(date, "days");
  const diffWeeks = moment().diff(date, "weeks");
  const diffMonths = moment().diff(date, "months");
  const diffYears = moment().diff(date, "years");

  if (diffMonths >= 12) {
    return `${diffYears} anos atrás`;
  } else if (diffWeeks >= 4) {
    return `${diffMonths} meses atrás`;
  } else if (diffDays >= 7) {
    return `${diffWeeks} semanas atrás`;
  } else if (diffHours >= 24) {
    return `${diffDays} dias atrás`;
  } else if (diffMinutes >= 60) {
    return `${diffHours} horas atrás`;
  } else if (diffSeconds >= 60) {
    return `${diffMinutes} minutos atrás`;
  } else {
    return `${diffSeconds} segundos atrás`;
  }
};
