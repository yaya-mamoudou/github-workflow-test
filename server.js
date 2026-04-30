const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
res.send(`Hello World on ${Date.now().toLocaleString()}`);
});

app.get("/random-numbers", (req, res) => {
  const count = Number.parseInt(req.query.count, 10) || 5;
  const safeCount = Math.min(Math.max(count, 1), 100);

  const numbers = Array.from({ length: safeCount }, () =>
    Math.floor(Math.random() * 100)
  );

  res.json({ numbers });
});

app.listen(port, () => {
  console.log(`Server running on port ${port} http://localhost:${port}`);
});
