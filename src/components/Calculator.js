import { useDispatch, useSelector } from 'react-redux';
import { calculatorActions } from '../features/calculator/calculatorSlice';
import { useEffect } from 'react';
import store from '../app/store';
import { DigitButton } from './DigitButton';
import { OperationButton } from './operationButton';

export function Calculator() {
    const { currentOperand, operation, previousOperand } = useSelector((state) => state.calculator);
    const {deleteDigit, evaluate, clear}= calculatorActions;
    const dispatch = useDispatch();


    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">
                    {previousOperand} {operation}
                </div>
                <div className="current-operand">{currentOperand}</div>
            </div>
            <button className="span-two" onClick={()=>dispatch(clear())}>A/C</button>
            <button value="DEL" onClick={()=>dispatch(deleteDigit())}>DEL</button>

            <OperationButton operation="&divide;">&divide;</OperationButton>
            <DigitButton digit="1">1</DigitButton>
            <DigitButton digit="2">2</DigitButton>
            <DigitButton digit="3">3</DigitButton>
            <OperationButton operation="*">*</OperationButton>
            <DigitButton digit="4">4</DigitButton>
            <DigitButton digit="5">5</DigitButton>
            <DigitButton digit="6">6</DigitButton>
            <OperationButton operation="+">+</OperationButton>
            <DigitButton digit="7">7</DigitButton>
            <DigitButton digit="8">8</DigitButton>
            <DigitButton digit="9">9</DigitButton>
            <OperationButton operation="-">-</OperationButton>
            <DigitButton digit=".">.</DigitButton>
            <DigitButton digit="0">0</DigitButton>

            <button onClick={()=>dispatch(evaluate())} className="span-two">=</button>
        </div>
    );
}

