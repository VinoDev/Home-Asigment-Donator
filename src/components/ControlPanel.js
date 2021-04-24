import './controlPanel.css'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import useDonatorForm from '../hooks/useDonatorForm.js';

const ControlPanel = ({searchInput, onSearchInputChange}) => {
    
    const {
        handleSubmit,
        handleNameChange,
        handleAmountChange,
        nameInput,
        amountInput
    } = useDonatorForm()

    return (
        <div className="control-panel">
            <form className="control-panel-top" onSubmit={e=>handleSubmit(e)}>
                <TextField 
                    label="Name" 
                    variant="filled" 
                    value={nameInput} 
                    onChange={e=>handleNameChange(e)}
                />
                <TextField 
                    label="Amount" 
                    variant="filled" 
                    value={amountInput} 
                    onChange={e=>handleAmountChange(e)}
                />
                <Button variant="contained" type="submit">Add</Button>
            </form>
            <div className="control-panel-bottom">
                {/* <div className="select-controller">
                    <InputLabel className="input-label">Order By:</InputLabel>
                    <Select 
                        className="select" 
                        value={'date'} 
                        disabled
                    >
                        <MenuItem value={"date"}>Date</MenuItem>
                        <MenuItem value={"amount"}>Amount</MenuItem>
                    </Select>
                </div> */}
                <TextField 
                    label="Search" 
                    variant="outlined" 
                    value={searchInput} 
                    onChange={e=>onSearchInputChange(e)}
                />
            </div>
        </div>
    )
}

export default ControlPanel;