const dotenv = require('dotenv');
// Load environment variables from the config.env file into process.env. This allows us to use environment variables in our application, such as PORT and NODE_ENV.
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3000;

// By default, this will be 'development' unless you set the NODE_ENV environment variable to 'production' or 'test'.
// it is set by express.
console.log(app.get('env'));

// console.log(process.env);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
