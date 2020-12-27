const delFile = (file_dir, file) => {
  const fs = require("fs");
  fs.unlink(`${file_dir}${file}`, (err) => {
    if (err) console.log(err);
    else console.log(`${file} was deleted`);
  });
};

module.exports = {
  delFile,
};
