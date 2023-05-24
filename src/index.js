import React from 'react'
import ReactDOM from 'react-dom/client'
import { compose, pipe } from 'lodash/fp'

//--------------- первая композиция
// const App = () => {
//     const x = 2
//     const double = (number) => number * 2
//     const square = (number) => number * number
//     return <h1>{square(double(x))}</h1>
// }

//--------------- вторая композиция
// const App = () => {
//     const x = 2
//     const double = (number) => number * 2
//     const square = (number) => number * number
//     const half = (number) => number / 2

//     return <h1>{half(square(double(x)))}</h1>
// }

const App = () => {
    const x = 2
    const double = (number) => number * 2
    const square = (number) => number * number
    const half = (number) => number / 2

    // const mathCalculate = compose(half, square, double)
    const mathCalculate = pipe(double, square, half)

    return <h1>{mathCalculate(x)}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
