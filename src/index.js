import React from 'react'
import ReactDOM from 'react-dom/client'
// функции высшего порядка это те функции которые принимают другие функции в качестве аргумента
// const App = (params) => {
//     function someFn() {
//         return function () {
//             return 'apps'
//         }
//     }
//     function fn(func) {
//         return func()
//     }
//     const fffk = someFn()
//     console.log('fffk', fffk)
//     return <h1>{fn(someFn())}</h1>
// }

const App = () => {
    const arr = [' some', ' new', ' data']
    function formatArray(el) {
        return el + ' some'
    }

    // setTimeout(() => {

    // }, timeout);

    return <h1>{arr.map(formatArray)}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
