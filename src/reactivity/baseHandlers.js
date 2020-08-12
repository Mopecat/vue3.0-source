import { reactive } from "./reactive";
import { isObject, hasOwn, hasChanged } from "../shared/utils";

const get = createGetter();
const set = createSetter();

function createGetter() {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    // todo
    console.log("获取值", target, key);
    // 如果是对象 就 递归 代理
    if (isObject(res)) {
      return reactive(res);
    }
    return res;
  };
}

function createSetter() {
  return function set(target, key, value, receiver) {
    // 需要判断是新增 还是修改 如果是修改 新设置的值 与原有的值 相同 则什么都不做
    const hasKey = hasOwn(target, key);
    const oldVal = target[key];
    const result = Reflect.set(target, key, value, receiver);
    // 说明是新增操作
    if (!hasKey) {
      console.log("新增了", target, key, value);
    } else if (hasChanged(value, oldVal)) {
      console.log("修改了", target, key, value);
    }

    // todo
    return result;
  };
}

export const mutableHandler = {
  get,
  set,
};
