const { createFileTXT } = require("../dirJs/create.txt.dir");
const { write } = require("../dirJs/update_file_tab.dir");
const { getVariableChannel } = require("../ARI/ari.variableChannels");
const { postOriginateOne } = require("../ARI/ari.originate_one");

const createChannels = async (arr_channels, count_channels, text_message, ip_ats, count_dial, time_dial) => {
  try {
    if (!!arr_channels.length && arr_channels.length > 0) {
      const file_records_name = `${Date.now()}`;
      const file_records_dir = `./text_records/`;
      const file_records_header = `My Alarm System Started ${new Date(
        Date.now()
      )}`;
      createFileTXT(file_records_dir, file_records_name, file_records_header);
      write([
        `${file_records_dir}${file_records_name}`,
        "Абонент",
        "Номер телефона",
        "Начало вызова",
        "Конец вызова",
        "Статус вызова",
      ]);
      let count = 0;
      while (count < arr_channels.length) {
        let count_asterisk_channel = await getVariableChannel();
        if (
          +count_asterisk_channel.value != 0 &&
          +count_asterisk_channel.value <= +count_channels
        ) {
            const user = arr_channels[count]
            user.variables.text_message = `${text_message}`
            user.variables.adress_ats = `${ip_ats}`
            user.variables.count_d = `${count_dial}`
            user.variables.time_dial = `${time_dial}`
          await postOriginateOne(user);
          count++;
        }
      }
      write([
        `${file_records_dir}${file_records_name}`,
        `My Alarm System Ending ${new Date(Date.now())}`,
      ]);
    } else {
      console.log("Ошибка количиства канналов");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createChannels,
};
