import React from 'react';
import ReactDOM from 'react-dom/client'
import { compose, pipe } from 'lodash/fp'

const App = () => {
  const x = 2
  // const y = x * 2
  // const z = y * y
  const double = (number) => number * 2
  const square = (number) => number * number
  const half = (number) => number / 2
  // const output = square(double(x))
  const mathCalculate = pipe(double,  square, half)

  return <h1>{mathCalculate(x)}</h1>
  
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)