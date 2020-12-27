const createFileTXT = (file_dir, file_name, header) => {
  fs.writeFile(`${file_dir}${file_name}`, `${header}`, (err) => {
    if (err) console.log(err);
  });
};

module.exports = {
  createFileTXT
}