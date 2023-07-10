import { useDispatch, useSelector } from 'react-redux';

export function Calculator(){
    const {currentOperand, operation, previousOperand} = useSelector((state)=>state.calculator)

    return (
        <div className="App">
        <div className='calculator-grid'>
            <div className='output'>
            <div className='previous-operand'>
                {previousOperand} {operation}
                </div>
            <div className='current-operand'>
                {currentOperand}
                </div>
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