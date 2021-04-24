import { useDispatch } from "react-redux";
import { useState } from 'react';
import donatorsSlice from '../state/donatorsSlice.js';
import validateInput from '../utils/validateInput.js';

const useDonatorForm = () => {

    const dispatch = useDispatch();

    const { ADD_DONATOR } = donatorsSlice.actions;

    const [ nameInput, setNameInput ] = useState('Baruch Cohen');
    const [ amountInput, setAmountInput ] = useState('100');

    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            if(nameInput && amountInput) {
                dispatch(ADD_DONATOR({
                    name: nameInput, amount: amountInput, date: Date.now()
                }))
                setNameInput('')
                setAmountInput('')
            }
        } catch (error) {
            return "error"
        }
    }

    const handleNameChange = (e) => {
        const input = e.target.value;
        const regex = /^[a-z_ ]+$/i
        if(validateInput(input, regex)){
            setNameInput(e.target.value)
        }
    }

    const handleAmountChange = (e) => {
        const input = e.target.value;
        const regex = /^[0-9]*$/
        if(validateInput(input, regex)){
            setAmountInput(e.target.value)
        }    
    }

    return {handleSubmit, handleNameChange, handleAmountChange, nameInput, amountInput}
}

export default useDonatorForm;