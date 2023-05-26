// import { taskUpdated, taskCompleted } from './actionTypes'
import * as actions from './actionTypes'

//------- вариант 1
// export function taskReducer(state, action) {
//   switch (action.type) {
//     case taskUpdated: {
//       const newArray = [...state]
//       const elementIndex = newArray.findIndex(
//         (el) => el.id === action.payload.id
//       )
//       newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload }
//       return newArray
//     }

//     default:
//       break
//   }
// }

// export function taskReducer(state, action) {
//   switch (action.type) {
//     case actions.taskCompleted:
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
//     case actions.taskUpdated: {
//       const newArray = [...state]
//       const elementIndex = newArray.findIndex(
//         (el) => el.id === action.payload.id
//       )
//       if (newArray[elementIndex].title === `Task ${action.payload.id}`) {
//         newArray[elementIndex].title = `New title for ${action.payload.id}`
//       } else {
//         newArray[elementIndex].title = `Task ${action.payload.id}`
//       }
//       // console.log('state', state)
//       // const newArray = state.map((el) =>
//       //   el.id === action.payload.id
//       //     ? { ...el, title: `New title for ${action.payload.id}` }
//       //     : el
//       // )
//       return newArray
//     }

//     default:
//       break
//   }
// }

export function taskReducer(state, action) {
  const newArray = [...state]
  const elementIndex = newArray.findIndex((el) => el.id === action.payload.id)

  switch (action.type) {
    case actions.taskCompleted:
      newArray[elementIndex].completed = !newArray[elementIndex].completed
      break
    case actions.taskUpdated:
      newArray[elementIndex].title =
        newArray[elementIndex].title === `Task ${action.payload.id}`
          ? `New title for ${action.payload.id}`
          : `Task ${action.payload.id}`
      break
    default:
      break
  }

  return newArray
}
