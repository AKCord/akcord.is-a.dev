const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/support", (req, res) => {
  res.sendFile(path.join(__dirname, "public/support.html"));
});

app.get("/github", (req, res) => {
  res.redirect("https://github.com/AKCord");
});

app.get("/discord", (req, res) => {
  res.redirect("https://discord.com/users/827062335620382751");
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public/404.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, "public/505.html"));
});

app.listen(PORT, () => {
  console.log(`☑️ Server started on http://localhost:${PORT}`);
});
