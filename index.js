import express from 'express';
import path from 'path';

import {
  getLatestQuestions
} from './routes/latestQuestions.js';

import {
  render
} from './services/renderService.js';

import {
  fileURLToPath
} from 'url';
import {
  dirname
} from 'path';

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = dirname(__filename);

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use(express.static(path.join(__dirname, 'public')));

app.get("/templates/sample", (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/sample/index.html'));
});

app.get("/api/latestQuestions", async (req, res) => {
  const json = await getLatestQuestions();
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(json));
});

app.get('/api/templates/latest-questions', async (req, res, next) => {
  try {
    const json = await getLatestQuestions();
    res.setHeader('Content-Type', 'text/html');
    const data = await render('latestQuestions', json);
    res.end(data);
  } catch (error) {
    next(error)
  }
})

function logErrors(err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({
      error: 'Something failed!'
    })
  } else {
    next(err)
  }
}

app.use(logErrors)
app.use(clientErrorHandler)

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});