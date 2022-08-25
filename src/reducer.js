let state;
let action

function changeState(state = { count: 0 }, action = { type: "counter/increment" }) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

dispatch({type: "@@INIT"})