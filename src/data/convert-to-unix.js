const fs = require("fs");
const moment = require("moment");

let rawData = fs.readFileSync("./raw-data.json");
let londonTemp = JSON.parse(rawData);

let lTCondensedDate = londonTemp.map(point => {
  return {
    dateTime: `${point.Year}/${point.Month}/${point.Day} ${point.Hour}:${
      point.Minute
    }`,
    temperature: point["Temperature  [2 m above gnd]"]
  };
});

let lTUnixDate = lTCondensedDate.map(point => {
  return {
    time: moment(point.dateTime, "YYYY/MM/DD HH:mm").valueOf(),
    temperature: point.temperature
  };
});

fs.writeFileSync("./unix-time-data.json",JSON.stringify(lTUnixDate));
