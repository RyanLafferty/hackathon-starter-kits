// polyfill hint for babel
import 'regenerator-runtime/runtime';
import express from 'express';
import cors from 'cors';
import HelloRouter from 'src/router/hello';

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
  console.log(`express-ts listening at http://localhost:${port}`);
});
