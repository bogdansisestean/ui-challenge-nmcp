import React, { MouseEventHandler } from 'react'

type Props={
    onChangeFilter: MouseEventHandler,
    selected: string,
    
}

const LookingForFilter =  ({onChangeFilter, selected}: Props) => {
const dropDownChangeHandler = (event: any) =>{
    onChangeFilter(event.target.value);
}
    return (
        <div className="apartments-filter"> 
            <div className="apartments-filter__control">
                <label>Looking for</label>
                <select value={selected} onChange={dropDownChangeHandler}>
                    <option value="Renting">Renting</option>
                    <option value="Buying">Buying</option>
                    <option value="Loan">Loan</option>
                </select>
            </div>
        </div>
    )
}

export default LookingForFilter;
