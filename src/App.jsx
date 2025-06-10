import './App.css'
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  
  const increment = () => {
    setCount(count + step);
  }
  const decrement = () => {
    setCount(count - step);
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <div className="app-container">
      <h1>Counter Value : {count}</h1>
      <input type='number'
        value = {step}
        onChange={(e) => setStep(parseInt(e.target.value))}
        placeholder='Enter step value'
        min='1'
        max='100'
        style={{width: '200px', padding: '10px', fontSize: '16px'}}
        autoFocus
        required
        pattern="[0-9]*"
        title="Please enter a valid number between 1 and 100"
      />
      <br />
      <br />
      <button onClick={increment}
        style={{backgroundColor: 'green', color: 'white', padding: '10px 20px', fontSize: '16px'}}>
      Increment</button>
      <br />
      <br />
      <button onClick={reset} 
        style={{backgroundColor: 'red', color: 'white', padding: '10px 20px', fontSize: '16px'}}
      >Reset</button>
      <br />
      <br />
      <button onClick={decrement}
        style={{backgroundColor: 'blue', color: 'white', padding: '10px 20px', fontSize: '16px'}}
      >Decrement</button>
    </div>
      
  )
}

export default App;
