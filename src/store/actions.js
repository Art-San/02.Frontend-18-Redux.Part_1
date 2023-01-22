import * as actionsTypes from './actionTypes'

export function taskComplete(id) {
    return {
        type: actionsTypes.taskUpdated,
        payload: { id, completed: true}
    }
}

export function titleChenge(id) {
    return {
        type: actionsTypes.taskUpdated,
        payload: { id, title: `New title for ${id}`}
    }
}