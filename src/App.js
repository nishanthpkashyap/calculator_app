// import logo from './logo.svg';
import { useReducer } from 'react';
import './App.css';

const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  

}

function reducer(state, {type, payload})
{

}

function App() {

  const [{previous_operand, current_operand, operation}, dispatch] = useReducer(reducer, {})

  return (
    <div className="App">
      <div className='calculator-grid'>
        <div className='output'>
          <div className='previous-operand'>{previous_operand} {operation}</div>
          <div className='current-operand'>{current_operand}</div>
        </div>
        <input type="button" className='span-two' value="A/C"></input>
        <input type="button"  value="DEL"></input>
        <input type="button"  value="÷"></input>
        <input type="button"  value="1"></input>
        <input type="button"  value="2"></input>
        <input type="button"  value="3"></input>
        <input type="button"  value="*"></input>
        <input type="button"  value="4"></input>
        <input type="button"  value="5"></input>
        <input type="button"  value="6"></input>
        <input type="button"  value="+"></input>
        <input type="button"  value="7"></input>
        <input type="button"  value="8"></input>
        <input type="button"  value="9"></input>
        <input type="button"  value="-"></input>
        <input type="button"  value="."></input>
        <input type="button"  value="0"></input>
        <input type="button" className='span-two' value="="></input>
      </div>
    </div>
  );
}

export default App;
