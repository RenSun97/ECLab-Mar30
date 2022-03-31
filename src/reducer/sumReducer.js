export default function sum(state = 0, action) {
  if (action.type === "ADD") {
    return state + action.value;
  }
  if (action.type === "DECREASE") {
    return state - action.value;
  }
  return state;
}
