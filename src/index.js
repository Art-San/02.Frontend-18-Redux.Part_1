import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

// function taskReducer(state, action) {
//   switch (action.type) {
//     case 'task/completed':
//       const newArray = [...state]
//       const elementIndex = newArray.findIndex(
//         (el) => el.id === action.payload.id
//       )
//       if (newArray[elementIndex].completed === false) {
//         newArray[elementIndex].completed = true
//       } else {
//         newArray[elementIndex].completed = false
//       }

//       return newArray

//     default:
//       break
//   }
// }

function taskReducer(state, action) {
  if (action.type === 'task/completed') {
    const newArray = state.map((el) =>
      el.id === action.payload.id ? { ...el, completed: !el.completed } : el
    )
    return newArray
  }
  return state
}

function createStore(reducer, initialState) {
  let state = initialState
  let listeners = []

  function getState() {
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }
  function subscribe(listener) {
    // Observer Pattern
    listeners.push(listener)
  }
  return { getState, dispatch, subscribe }
}

const store = createStore(taskReducer, [
  { id: 1, description: 'Task 1', completed: false },
  { id: 2, description: 'Task 2', completed: false }
])

const App = () => {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])

  const completeTask = (taskId) => {
    store.dispatch({
      type: 'task/completed',
      payload: { id: taskId }
    })
  }

  return (
    <>
      <h1>App</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.description}</p>
            <p> {`Comleted: ${el.completed}`}</p>
            <button onClick={() => completeTask(el.id)}>Completed</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
