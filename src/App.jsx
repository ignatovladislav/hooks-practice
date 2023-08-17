import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Test = () => {
    const [count, setCount] = useState(0)

    console.log('TEST')
    return (
        <div onClick={() => setCount((prev) => prev + 1)}>{count}</div>
    )
}

const fakeFetch = async () => new Promise((resolve) => {
    return setTimeout(() => resolve([1,2,3]), 3000)
})

function App() {
  const [isLoading, setIsLoading] = useState(false);
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        setIsLoading(true);

        const result = await fakeFetch();

        setCards(result);


        setIsLoading(false)
    }


    if (isLoading) {
        return  <div>...loading</div>
    }

  return (
    <>
        <Test />

        <button onClick={fetchCards}>FETCH</button>

        {cards.map((card) => <div key={card}>{card}</div>)}
      {/*<div>*/}
      {/*  <a href="https://vitejs.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
    </>
  )
}

export default App
