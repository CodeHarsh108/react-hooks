import './App.css'
import {useState} from 'react';

function App() {
  //First 
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  
  const increment = () => {
    setCount(count + step);
  }
  const incrementTwice = () => {
    setCount(c => c + 1);
    setCount(c => c + 1); 
  }
  const decrement = () => {
    setCount(count - step);
  }
  const reset = () => {
    setCount(0);
  }


  //Second
  const [counters, setCounters] = useState([{id: 1, value: 0}]);
  const addCounter = () => {
    setCounters([...counters, {id: counters.length + 1, value: 0}]);
  };
  const incrementCounter = (id) => {
    setCounters(counters.map(counter => 
      counter.id === id ? {...counter, value: counter.value + 1} : counter
    ));
  }

  return (
    <div className="main-container">
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
      <button onClick={incrementTwice}
        style={{backgroundColor: 'green', color: 'white', padding: '10px 20px', fontSize: '16px', marginLeft: '10px'}
        }>
      +2</button>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

        <button onClick={addCounter}>Add Counter</button>
        <ul>
          {
            counters.map(counter => (
              <li key={counter.id}>Counter {counter.id} : {counter.value}
              <button onClick={() => incrementCounter(counter.id)} style={{margin:'10px'}}>Increment</button>
              <button onClick={() => setCounters(counters.filter(c => c.id !== counter.id))} style={{margin:'10px'}}>Remove</button>
              
              </li>
            ))
          }
        </ul>
    </div>





      
  )
}

export default App;
