import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Cors
app.use(cors());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Running on port: ', port);
});
