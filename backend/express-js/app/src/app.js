const express = require('express');
const cors = require('cors');
const HelloRouter = require('./router/hello');

const port = process.env.PORT || 8080;

// CORS
const allowedOrigins = [
  `http://localhost:${port}`,
];

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200
};

// express server
const app = express();

// express plugins
app.use(cors(corsOptions));
app.use(express.json());

// express routes
app.use('/', HelloRouter);

// start express server
app.listen(port, () => {
  console.log(`not-code-sandbox-api listening at http://localhost:${port}`);
});
