const delFile = (file_dir, file) => {
    fs.unlink(`${file_dir}${file}`, (err) => {
      if (err) console.log(err);
      else console.log(`${file} was deleted`);
    });
  };