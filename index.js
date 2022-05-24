var express = require('express');
var app = express();
var cors = require('cors');
const fs = require("fs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/students', function (req, res) {
    let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    res.send(data);
});
app.put('/students', function (req, res) {
   let rawdata = fs.readFileSync('data.json');
    let data= JSON.parse(rawdata);
    const index = data.findIndex(student => student.id === req.body.student.id);
    data[index] = req.body.student;
    fs.writeFileSync('data.json', JSON.stringify(data,null,2));
    res.status(200).send("Success");
});

app.listen(8000, function () {
    console.log('Listening to Port 8000');
});