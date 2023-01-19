import React from 'react';
import ReactDOM from 'react-dom/client'

const App = () => {
 const arr = [' some', ' new', ' data']
 function formatArray(el) {return el + ' some'}
 
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


// function someFn() {
//   return function() {
//     return 'apps'
//   }
// }
// function fn(func) {
// return func()

// }