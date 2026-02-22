const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

const publicPath = path.join(__dirname, "public");

// лог чтобы увидеть путь
console.log("Serving static from:", publicPath);

// раздача статических файлов
app.use(express.static(publicPath));

// ROOT → index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// API
app.get("/signal", (req, res) => {
  const pairs = ["BTCUSDT","ETHUSDT","BNBUSDT","SOLUSDT","XRPUSDT","ADAUSDT","DOGEUSDT"];

  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  const price = (Math.random() * 70000 + 1000).toFixed(2);
  const signal = Math.random() > 0.5 ? "UP" : "DOWN";

  res.json({ pair, price, signal });
});

app.listen(3000, () => {
  console.log("🔥 Server running on http://localhost:3000");
});
