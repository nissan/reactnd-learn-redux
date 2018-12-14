function createStore() {
  // The state should have four parts
  // 1. The state
  // 2. Get the state
  // 3. List to changes on the state
  // 4. Update the state

  let state;

  const getState = () => state;

  return {
    getState
  };
}
