const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "public/projects.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public/404.html"));
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, "public/505.html"));
});

app.listen(PORT, () => {
  console.log(`☑️ Server started on http://localhost:${PORT}`);
});
