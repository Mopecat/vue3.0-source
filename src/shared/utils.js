export const isObject = (target) =>
  typeof target === "object" && target != null;

export const hasOwn = (target, key) =>
  Object.prototype.hasOwnProperty.call(target, key);

// 这里其实应该考虑都是NaN的情况
export const hasChanged = (newVal, oldVal) => newVal !== oldVal;
