import React, { MouseEventHandler } from 'react';

type Props = {
    onChangeFilter: MouseEventHandler,
    selected: string,
}
const LocationFilter = ({onChangeFilter, selected}: Props) => {
    const dropDownChangeHandler = (event: any) =>{
        onChangeFilter(event.target.value);
    }
    return (
        <div className="apartments-filter"> 
            <div className="apartments-filter__control">
                <label>Location</label>
                <select value={selected} onChange={dropDownChangeHandler}>
                    <option value="Texas">Texas</option>
                    <option value="New York">New Tork</option>
                    <option value="Pheonix">Pheonix</option>
                </select>
            </div>
        </div>
    )
}

export default LocationFilter;
