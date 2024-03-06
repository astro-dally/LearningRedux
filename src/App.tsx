import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented,amountAdded } from './features/counter/counterSlice';
import reactLogo from './assets/react.svg'
import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const count = useAppSelector((state)=> state.counter.value);
  const dispatch = useAppDispatch();
  const { data=[], isFetching }  = useFetchBreedsQuery(10);

  function handleClick(){
    //increment by 1
    // dispatch(incremented())

    //increment by a fixed amount
    dispatch(amountAdded(6));
  }

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        
      </div>
      <p>Number of Dogs fetched: {data.length}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map((breed)=>(
            <tr key={breed.id}>
              <td key={breed.name}></td>
              <td>
                <img src={breed.image.url} alt={breed.name} height={250}/>
              </td>
            </tr>
            
          )
          )}
        </tbody>
      </table>
      </div>
  )
}

export default App
