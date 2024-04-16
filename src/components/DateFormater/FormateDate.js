import moment from "moment";

function FormateDate(date) {
  const formattedDate = moment.unix(date).format("DD MMM");
  return formattedDate;
}

export default FormateDate;
