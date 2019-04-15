function _isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

export var isArray = Array.isArray || _isArray;

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
