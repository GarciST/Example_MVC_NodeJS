
import {Back} from "back-js";
import { MongoDBconfiguration, ExpressConfiguration } from './configuration';

import http = require("http");
import path = require("path");
import  bodyParser = require("body-parser"); 
import mongoose = require("mongoose");
 
/** 
 * Imported Controllers
*/
import "./controllers/homeController";
import "./controllers/StudentController";
import "./controllers/CourseController"


const URIserver = MongoDBconfiguration.getURI();

mongoose.connect(URIserver, function(err) {
    if (err) {
      console.log('Error connection database ' + err.message);
    } else {
      console.log('MongoDB connected success: ' + MongoDBconfiguration.databaseName);
    }
  });
 
 
let express = Back.express;
let app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/**
 * prepare express routes
 */
Back.prepare(app);


var port =  ExpressConfiguration.port;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
