import React from 'react'
import ReactDOM from 'react-dom/client'
//---- вариант 1
// const App = () => {
//     function fn() {
//         return 'app'
//     }

//     return <h1>{fn()}</h1>
// }

//---- вариант 2
// const App = () => {
//     function fn() {
//         return 'app'
//     }
//     const someFn = fn

//     return <h1>{someFn()}</h1>
// }

//---- вариант 3
// const App = () => {
//     function fn() {
//         return 'app'
//     }
//     function someFn(func) {
//         return func()
//     }
//     return <h1>{someFn(fn)}</h1>
// }

//---- вариант 4
const App = () => {
    function someFn() {
        return function () {
            return 'app'
        }
    }
    const fn = someFn()
    console.log(fn)
    return <h1>{fn()}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
