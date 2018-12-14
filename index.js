function todos (state = [], action) {
  if (action.type==='ADD_TODO') {
    return state.concat([action.todo]);
  }

  return state;
}
function createStore() {
  // The state should have four parts
  // 1. The state
  // 2. Get the state
  // 3. List to changes on the state
  // 4. Update the state

  let state;
  let listeners = []

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l)=> l !== listener)
    }
  }

  const dispatch = (action) => {
    state = todos(state, action);
    listeners.forEach((listerer) => listener());
  }
  return {
    getState,
    subscribe
  };
}