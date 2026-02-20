const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// Importing the morgan middleware for logging HTTP requests.
// This will help us see details about incoming requests in the console.
const morgan = require('morgan');

// 1). MIDDLEWARES

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Using morgan middleware in 'dev' mode for concise output colored by response status for development use.
}

// Middleware to parse JSON bodies from incoming requests and make it available in req.body.
app.use(express.json());

// Serving static files from the 'public' directory. This means that any file in the 'public' folder can be accessed directly via a URL.
app.use(express.static(`${__dirname}/public`));

// Custom middleware to log a message for every incoming request.
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3). ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
