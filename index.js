require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/errorController");
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const clientRoute = require('./routes/clientRoute');
const clientLocationRoute = require('./routes/clientLocationRoute');
const courierRoute = require('./routes/courierRoute');
const deliveryRoute = require('./routes/deliveryRoute');
const deliveryItemRoute = require('./routes/deliveryItemRoute');
const itemRoute = require('./routes/itemRoute');

const app = express();

const port = process.env.API_PORT || 3050;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Custom-Header, Authorization');
    next();
});

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/client', clientRoute);
app.use('/api/clientlocation', clientLocationRoute);
app.use('/api/courier', courierRoute);
app.use('/api/delivery', deliveryRoute);
app.use('/api/deliveryitem', deliveryItemRoute);
app.use('/api/item', itemRoute);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(port, () => {
    console.log(`server running on ${port}`);
})