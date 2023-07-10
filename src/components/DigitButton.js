import { useDispatch } from 'react-redux';
import { calculatorActions } from '../features/calculator/calculatorSlice';

export function DigitButton({digit}){
    const dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(calculatorActions.addDigit(digit))}>{digit}</button>
    )
}