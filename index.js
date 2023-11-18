const array = [
  { date: "07-06-22", temperature: 30, time: 12.3 },
  { date: "07-06-22", temperature: 36, time: 14.3 },
  { date: "07-06-22", temperature: 28, time: 16.3 },
  { date: "08-06-22", temperature: 30, time: 12.3 },
  { date: "08-06-22", temperature: 32, time: 12.5 },
  { date: "08-06-22", temperature: 38, time: 2.3 },
  { date: "08-06-22", temperature: 29, time: 15.3 },
  { date: "08-06-22", temperature: 39, time: 17.3 },
];

const res = array.reduce((result, entry) => {
  const { date, temperature } = entry;
  if (!result[date]) {
    result[date] = { min: temperature, max: temperature };
  } else {
    result[date].min = Math.min(temperature, result[date].min);
    result[date].max = Math.max(temperature, result[date].max);
  }
  return result;
}, {});

let res1 = Object.keys(res).map((date) => ({
  date,
  max: res[date].max,
  min: res[date].min,
}));

console.log(res1);
