// Library code
function createStore(reducer) {
  // The state should have four parts
  // 1. The state
  // 2. Get the state
  // 3. List to changes on the state
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  return {
    getState,
    subscribe,
    dispatch
  };
}

// App Code
function todos(state = [], action) {
  if (action.type === "ADD_TODO") {
    return state.concat([action.todo]);
  }
  else if (action.type==='REMOVE_TODO') {
    return state.filter((todo)=>todo.id!==action.id)
  }
  else if (action.type==='TOGGLE_TODO') {
    return state.map((todo)=> todo.id!==action.id? todo:
    Object.assign({}, todo, {complete: !todo.complete} ))
  }

  return state;
}

const store = createStore(todos);
store.subscribe(() => {
  console.log("The new state is: ", store.getState());
});

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: "Learn Redux",
    complete: false
  }
});
