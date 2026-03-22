
import { Suspense } from 'react'
import Countries from './Components/Countries/Countries'
import './App.css'

const countriesPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

function App() {
  return (
    <>
<h1>React world on the go...</h1>
<Suspense fallback={<h3> I am Going to World tour...</h3>}>
<Countries countriesPromise={countriesPromise}></Countries>
</Suspense>

    </>
  )
}

export default App
