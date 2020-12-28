const createFileTXT = (file_dir, file_name, header) => {
  const fs = require("fs");
  fs.writeFile(`${file_dir}${file_name}.txt`, `${header}\r\n`, (err) => {
    if (err) console.log(err);
  });
};

module.exports = {
  createFileTXT,
};
