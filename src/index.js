import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import configViewEngine from "./config/config_view_engine";
import webRoute from './route/web_routes'

import axios from 'axios'

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')))

configViewEngine(app)

let port = process.env.PORT || 8080;


app.use(webRoute)


// app.use('/book', (req, res) => {
//     const apiKey = "AIzaSyDRVbEmQEX6he8WwVQYgRLbtwr9gMPmRbM";
//     let url = "https://www.googleapis.com/books/v1/volumes?q=subject:Fiction";


//     axios.get(url)
//         .then(res => {
//             let data = res.data;
//             console.log(res.data);
//         })
// })



app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
})