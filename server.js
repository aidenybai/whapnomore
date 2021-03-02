const express = require('express');
const summarize = require('text-summarization');
const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.get('/', (_req, res) => {
  res.render('index');
});

app.get('/summarize', async (req, res) => {
  const text = decodeURIComponent(req.query.content);
  const summary = await summarize({ text });

  res.json(summary.extractive);
});

app.listen(3000, () => console.log('WEEE'));
