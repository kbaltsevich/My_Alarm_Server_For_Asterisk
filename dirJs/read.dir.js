const readDirectory = (file_dir) => {
  const fs = require("fs");
  fs.readdir(`${file_dir}`, (err, files) => {
    if (err) console.log(err);
    console.log(files);
  });
};

module.exports = {
  readDirectory,
};
