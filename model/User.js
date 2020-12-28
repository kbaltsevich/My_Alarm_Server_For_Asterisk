const User = (name, number, priority) => {
  return {
    endpoint: `local/${number}@prozvon-dialer`,
    extension: `ups`,
    context: `prozvon-informer`,
    priority: priority,
    timeout: -1,
    variables: {
      name_abonent: `${name}`,
      number: `${number}`,
    },
  };
};

module.exports = {
  User,
};
