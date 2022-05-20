var express = require('express');
var app = express();
var cors = require('cors');
//import * as data from "./data.json";
const Details = require('./data').students;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/students', function (req, res) {
    console.log("Details",Details);
    res.send(Details);
});
app.put('/students', function (req, res) {
    const updatedStudent = req.body;
    const index=Details.findIndex(student=>student.id===req.body.student.id);
    console.log("index",index);
    console.log("data",Details[index]=req.body.student);
    console.log("final",Details);

});
app.listen(8000, function () {
    console.log('Listening to Port 9000');
});