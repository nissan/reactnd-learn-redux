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
  return {
    getState,
    subscribe
  };
}

// const store = createStore();
// store.subscribe(()=> {
//   console.log('The new state is', store.getState())
// })

// store.subscribe(() => {
//   console.log('The store changed')
// })

// const unsubscribe = store.subscribe(()=> {
//   console.log('The store changed.')
// })

// unsubscribe(); //allows the 2nd function to be unsubscribed
