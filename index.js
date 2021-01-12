const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const logger=require('morgan');
var cors = require('cors');
const router=require('./router');
mongoose
    .connect('mongodb+srv://admin:admin@cluster0.vq9op.mongodb.net/ticketbooking?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err))
    // and create our instances
const app = express();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3000;
// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

// Use our router configuration when we call /api
app.use(router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));