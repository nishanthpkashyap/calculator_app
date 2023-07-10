import { calculatorActions } from "../features/calculator/calculatorSlice";
import { useDispatch } from 'react-redux';



export function OperationButton({operation}) {
    const dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(calculatorActions.chooseOperator(operation))}>{operation}</button>
    )
}