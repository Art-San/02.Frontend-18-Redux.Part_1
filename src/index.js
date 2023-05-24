import React from 'react'
import ReactDOM from 'react-dom/client'
import { pipe } from 'lodash/fp'

// не чиятая функция так как зависит от внешненго
// не управляемого фактора в даном случае изза Math.random()
// const App = () => {
//     const x = 2

//     const double = (number) => number * 2
//     const square = (number) => number * number
//     const half = (number) => number / Math.random()

//     const divider = (num2) => {
//         return function (num1) {
//             return num1 / num2
//         }
//     }

//     const mathCalculate = pipe(double, square, half, divider(3))

//     return <h1>{mathCalculate(x)}</h1>
// }

const App = () => {
    const x = 2
    let y = 6

    const double = (number) => number * 2
    const square = (number) => number * number
    const half = (number) => number / y
    // const half = (number, y) => number / y // добавили у, и она стала чистоЫ
    console.log('half(1)', half(12))
    y = 2
    console.log('half(2)', half(12))

    const divider = (num2) => {
        return function (num1) {
            return num1 / num2
        }
    }

    const mathCalculate = pipe(double, square, half, divider(3))

    return <h1>{mathCalculate(x)}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
