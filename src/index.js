import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'

const App = () => {
  const [state, setState] = useState('staring')
  // setState((prevState) => ({...prevState, name: 'anjela'}))
  const obj1 = { id: 2, name: 'Some', autor: {name: 'some2'} }
  // const obj2 = { ...obj1} // true одинаковые ссылки obj1.autor === obj2.autor
  const obj2 = { ...obj1, autor: { ...obj1.autor } } // false теперь разные ссылки obj1.autor === obj2.autor
  console.log(obj1.autor === obj2.autor)
  // console.log(obj2.autor.name)

  return <h1>{state}</h1>
  
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)