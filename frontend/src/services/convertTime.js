const convertDateFormat = (timeSql) => {
  const day = timeSql.slice(8, 10);
  let month = "";
  switch (timeSql.slice(5, 7)) {
    case "01":
      month = "JANVIER";
      break;
    case "02":
      month = "FEVRIER";
      break;
    case "03":
      month = "MARS";
      break;
    case "04":
      month = "AVRIL";
      break;
    case "05":
      month = "MAI";
      break;
    case "06":
      month = "JUIN";
      break;
    case "07":
      month = "JUILLET";
      break;
    case "08":
      month = "AOUT";
      break;
    case "09":
      month = "SEPTEMBRE";
      break;
    case "10":
      month = "OCTOBRE";
      break;
    case "11":
      month = "NOVEMBRE";
      break;
    case "12":
      month = "DECEMBRE";
      break;
    default:
      month = "";
  }

  const year = timeSql.slice(0, 4);
  return `${day} ${month} ${year}`;
};

const convertHourFormat = (timeSql) => {
  const hour = timeSql.slice(11, 13);
  const minute = timeSql.slice(14, 16);
  return `${hour} : ${minute}`;
};

export { convertDateFormat, convertHourFormat };
