const minutesRegExp = /^([0-9]{2})$/;
const secondsRegExp = /^([0-5][0-9])$/;
const regexp = /^([0-9:])+$/;

export const timeValidate = (value) => {
  if (minutesRegExp.test(value.split(":")[0])) {
    if (secondsRegExp.test(value.split(":")[1])) {
      return value.split(":")[0] + ":" + value.split(":")[1];
    }
    return value.split(":")[0] + ":00";
  } else return "00:00";
};

export const inputValidate = (value) => {
  if (value.length < 6) {
    if (regexp.test(value)) {
      return value;
    }
  }
};
