import React from 'react'

function LookingForFilter(props) {
const dropDownChangeHandler = (event) =>{
    props.onChangeFilter(event.target.value);
}
    return (
        <div className="apartments-filter"> 
            <div className="apartments-filter__control">
                <label>Looking for</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value="Renting">Renting</option>
                    <option value="Buying">Buying</option>
                    <option value="Loan">Loan</option>
                </select>
            </div>
        </div>
    )
}

export default LookingForFilter;
