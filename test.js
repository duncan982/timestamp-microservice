const moment = require("moment");

const d = 1451001600000;

// const d2 = new Date(d);
const d2 = moment(d).format("ddd, D MMM YYYY hh:mm:ss");
// console.log(d2);
// const d3 = d2.toUTCString();
// console.log(d3);

// console.log(moment(d).utc().local().format("llll"));
// console.log(moment(d).utc().local().format("Fri, 25 Dec 2015 00:00:00 GMT"));
// console.log(moment(d).utc().local().format("ddd, D MMM YYYY hh:mm:ss"));
console.log(moment(d).format("ddd, D MMM YYYY hh:mm:ssA"));
console.log(moment(d).toISOString());

const d3 = new Date(d);
console.log(d3.toISOString());

// console.log(
//     moment(d * 1000)
//     .utc()
//     .local()
//     .format("ddd, D MMM YYYY hh:mm:ss")
// );
// console.log(
//     moment
//     .unix(d / 1000)
//     .utc()
//     .local()
//     .format("ddd, D MMM YYYY hh:mm:ss")
// );

// console.log(d.toUTCString());

// console.log(moment.unix(d).isValid());
// console.log(!moment(d).isValid());