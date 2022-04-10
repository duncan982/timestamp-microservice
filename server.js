// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var moment = require('moment');
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", (req, res)=>{
  var date = req.params.date;

  // check if date is null
  if(date == null){
    let d;
    d = new Date()
    res.json({
      unix: new Date(d).getTime(),
      utc: new Date(d).toUTCString()
    })
  } else {
    if(moment(date).isValid() || moment.unix(date).isValid()){ // check if date is valid
      if(new Date(date).getTime() > 0){
        res.json({
          unix: new Date(date).getTime(),
          utc: new Date(date).toUTCString()
        })

      }else{
        res.json({
          unix: parseInt(date),
          utc: new Date(moment.unix(date/1000)).toUTCString()
        });
      };
    }else{ // throw error if date is in-valid
      res.json({error: "Invalid Date"});
    }
  };
});
 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
