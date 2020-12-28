const User = (name, number) => {
  return {
    endpoint: `local/${number}@prozvon-dialer`,
    extension: `ups`,
    context: `prozvon-informer`,
    priority: 1,
    timeout: -1,
    variables: {
      name_abonent: `${name}`,
      number: `${number}`,
      text_message: `Привет`,
      adress_ats: `10.17.88.1`,
      count_d: `2`,
      time_dial: `30`,
    },
  };
};

module.exports = {
  User,
};
