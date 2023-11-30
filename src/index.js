import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/config_view_engine";


let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


configViewEngine(app)

let port = process.env.PORT || 8080;



// index page 
app.get('/', function (req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function (req, res) {
    res.render('pages/about');
});







app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
})