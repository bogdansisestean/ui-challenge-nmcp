import React from 'react';

function LocationFilter(props) {
    const dropDownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="apartments-filter"> 
            <div className="apartments-filter__control">
                <label>Location</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value="Texas">Texas</option>
                    <option value="New York">New Tork   </option>
                    <option value="Pheonix">Pheonix</option>
                </select>
            </div>
        </div>
    )
}

export default LocationFilter;
