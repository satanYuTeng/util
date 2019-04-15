import { isArray, isObject } from './util';

export default function deepCopy(destination, source) {
  for (var key in source) {
    var value = source[key];

    if (isArray(value)) {
      value = deepCopy([], value);
    } else if (isObject(value)) {
      value = deepCopy({}, value);
    }

    destination[key] = value;
  }

  return destination;
}
