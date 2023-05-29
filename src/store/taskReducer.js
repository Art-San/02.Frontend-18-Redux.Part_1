import { taskUpdated, taskCompleted } from './actionTypes'

export function taskReducer(state = [], action) {
  if (action.payload) {
    const newArray = [...state]
    const elementIndex = newArray.findIndex((el) => el.id === action.payload.id)

    switch (action.type) {
      case taskCompleted:
        newArray[elementIndex].completed = !newArray[elementIndex].completed
        break
      case taskUpdated:
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

  return state
}

// import { taskUpdated } from "./actionTypes";

// export function taskReduser(state = [], action) {
//     switch (action.type) {
//         case taskUpdated: {
//           const newArray = [...state]
//         const elementIndex = newArray.findIndex(
//           (el) => el.id === action.payload.id
//           )
//           newArray[elementIndex] = {...newArray[elementIndex], ...action.payload}
//           return newArray
//         }

//       default:
//         return state
//     }

//   }
