const addres = process.argv[2];
const name = process.argv[3];
const phone = process.argv[4];
const startCall = process.argv[5];
const endCall = process.argv[6];
const dialstatus = process.argv[7];

const lengthChanger = (text) => {
  while (text.length < 16) {
    text = `${text} `;
  }
  return text;
};

const writeLines = (dataText) => {
  let line = "-";

  line = `${line.repeat(dataText.length)}\r\n`;
  return line;
};

const write = (arr) => {
  if (!arr.length) {
    return console.log("no arguments");
  }
  const fs = require("fs");
  let dataText = "";
  for (let i = 1; i < arr.length; i++) {
    dataText = `${dataText + lengthChanger(arr[i])}\t |`;
  }
  dataText = `${dataText} \r\n`;
  fs.appendFile(`${arr[0]}.txt`, dataText, function (error) {
    if (error) throw error;
  });
  fs.appendFile(`${arr[0]}.txt`, writeLines(dataText), function (error) {
    if (error) throw error;
  });
};

const arr = process.argv.filter((item, index) => index != 0 && index != 1);
write(arr);

module.exports = {
  write,
};

//node update_file_tab.dir.js name_file name phone startCall endCall dialstatus
