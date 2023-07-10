const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(fileUpload({}));
app.use(express.json());
app.use(cors());

app.post("/img", (req, res) => {
  const file = req.files.file;
  const date = Date.now();
  const type = file.name.split(".").pop();
  const fileName = date + "-postImg." + type;
  const urlfile = `http://62.113.104.182:80/file?filename=${fileName}`;
  file.mv(`./files/${fileName}`, file);
  res
    .json({
      urlfile,
    })
    .status(200);
});

app.get("/file", (req, res) => {
  const { filename } = req.query;
  fs.readFile(`./files/${filename}`, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ message: "Some error" }).status(400);
    }
    res.send(data);
  });
});

app.listen(80, () => {
  console.log("Running");
});
