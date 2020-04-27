exports.getExpiredTime = () => {
  const fiveDaysFromToday = 5 * 24 * 60 * 60 * 1000;
  return new Date(new Date().getTime() + fiveDaysFromToday);
};
