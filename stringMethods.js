const stringLength = (string) => {
  try {
    if (string.length < 1) throw new Error('String no longer enough');
    if (string.length > 10) throw new Error('String too big');
  } catch (e) {
    throw (e);
  }

  return string.length;
};

const reverseString = (string) => string.split('').reverse().join('');
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = { reverseString, stringLength, capitalize };