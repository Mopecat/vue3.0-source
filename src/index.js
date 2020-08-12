import { reactive, effect, computed, ref } from "./reactivity";

const state = reactive({ name: "mopecat", age: 18, arr: [1, 2, 3] });

// 添加操作
state.arr.push(4);
// 修改操作
state.arr[0] = 100;
// 修改但是值相同
state.arr[1] = 2;
// effect(() => {
//   console.log(state.name);
// });
// console.log(state.name);
// state.name = "feely";
