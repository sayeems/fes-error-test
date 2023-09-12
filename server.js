const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "welcome",
  });
});

app.listen(port, () => {
  console.log(`app started on port: ${port}`);
});
