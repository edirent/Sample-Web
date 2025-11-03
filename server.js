const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static assets from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Fallback for SPA-like routing or direct navigation
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Sample web app running at http://localhost:${port}`);
});
