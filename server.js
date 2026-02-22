const express = require('express');
const app = express();
app.use(express.json());

const users = [];

// регистрация
app.post('/register', (req, res) => {
  const { telegramId } = req.body;
  if (!users.includes(telegramId)) {
    users.push(telegramId);
  }
  res.json({ success: true });
});

// получение сигнала
app.post('/signal', (req, res) => {
  const { telegramId, pair, timeframe } = req.body;

  if (!users.includes(telegramId)) {
    return res.json({ access: false });
  }

  res.json({
    access: true,
    pair,
    timeframe,
    signal: Math.random() > 0.5 ? "LONG 🚀" : "SHORT 🔻"
  });
});

app.use(express.static('public'));

app.listen(3000, () => console.log("Server running"));
