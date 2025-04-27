

import './App.css'
import { useRecoilState } from 'recoil'
import { counterState } from './counterAtom'

function App() {
  const [count, setCount] = useRecoilState(counterState);


  return (
 <div>
<h1>Counter:{count}</h1>
<button onClick={()=> setCount(count+1)}>Increment</button>
<button onClick={()=> setCount(count-1)}>Decrement</button>
<button onClick={()=> setCount(0)}>Reset</button>
 </div>
  )
}

export default App
