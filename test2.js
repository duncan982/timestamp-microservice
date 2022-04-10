// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();
var moment = require("moment");
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
    res.json({ greeting: "hello API" });
});

app.get("/api/:date?", (req, res) => {
    var date = req.params.date;
    // console.log("Accessible");
    // console.log(moment.unix(date).isValid())

    // check if date is null
    if (date == null) {
        let d;
        d = new Date();
        res.json({
            unix: new Date(d).getTime(),
            utc: new Date(d).toUTCString(),
        });
    } else {
        // if(moment(date).isValid() != true || moment.unix(date).isValid() != true){
        if (new Date(date).toString() == "Invalid Date") {
            // if (!isNaN(date)) {
            // if (!moment(date).isValid()) { // check if date string is invalid
            res.json({ error: "Invalid Date" });
        } else {
            // check if date string is valid
            // check if date is valid and returns a unix and utc version, otherwise if date is utc returns the
            if (new Date(date).getTime() > 0) {
                var unixTimeStamp = new Date(date).getTime();
                res.json({
                    unix: new Date(date).getTime(), //convert date to unix time stamp
                    utc: new Date(date).toUTCString(), //convert date to utc time stamp
                });
            } else {
                const d2 = new Date(date);
                console.log(d2);
                const d3 = d2.toUTCString();
                console.log(d3);
                res.json({
                    unix: date,
                    // utc : new Date(date*1000).toUTCString()
                    // utc : moment(date*1000).utc().locale('US').format('llll')
                    // utc : moment(date).utc().local().format('ddd, D MMM YYYY hh:mm:ss')
                    utc: d3,
                });
            }
        }
    }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
});