import express from 'express';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';

const app = express(); // calls the function express() that create a new app and assigns the result to the const app
let PORT = process.env.PORT || 5000; // use this port #5000 to start a server

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
// app.get('/', home); // router utilize HTTP method GET and receive URL - "http://localhost:5000/" and function HOME
//                        when you went to http://localhost:5000/ using method GET then func HOME would be called
// app.post('/info', info); // message would be returned
errorHandler(app);

app.listen(PORT, () => {
  // to start the server a listen method has to be called with particular port 5000
  console.log(`Example app listening on port ${PORT}`); // after you make a npm start or node index.js to run file though terminal you"ll see
}); // notice "Example app listening on port 5000" then go to postman home page http://localhost:5000/ to see "Hello Lena!"
