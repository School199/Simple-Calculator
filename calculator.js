const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var result = weight / (height * height);
    if (result < 16) {
        res.send("Severely Underweight " + result);
    } else if (result < 18) {
        res.send("Underweight " + result);
    } else if (result < 25) {
        res.send("Normal weight " + result);
    } else if (result < 28) {
        res.send("Overweight " + result);
    } else if (result < 35) {
        res.send("Moderatly Obese " + result);
    } else if (result < 40) {
        res.send("Severly Obese " + result);
    } else if (result > 40) {
        res.send("Morbidly Obese " + result);
    } else {
        res.send("Invalid input");
    };
});

app.listen(3000, function() {
    console.log("Server is runing on port 3000!");
});