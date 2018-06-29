/* eslint-disable */
String.prototype.format = function () {
  if (arguments.length === 0) {
    return this;
  }
  for (var s = this, i = 0; i < arguments.length; i++) {
    s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
  }
  return s;
};

export function isNotEmpty(string) {
  if (string && string !== null && typeof string !== undefined && string !== '') return true
  else return false
}

export function isEmpty(string) {
  if (string === null || typeof string === undefined || typeof string === 'undefined' || string === '') return true
  else return false
}
