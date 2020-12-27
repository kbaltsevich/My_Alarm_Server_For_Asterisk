const readFile = (file_dir, file) => {
  const fs = require("fs");
  fs.readFile(`${file_dir}${file}`, "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
};

module.exports = {
  readFile,
};
