const createFileTXT = (file_dir, file_name, header) => {
  const fs = require("fs");
  fs.writeFile(`${file_dir}${file_name}`, `${header}`, (err) => {
    if (err) console.log(err);
  });
};

module.exports = {
  createFileTXT
}