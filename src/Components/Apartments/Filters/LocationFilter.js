import React from 'react';

function LocationFilter() {
    return (
        <div className="apartments-filter"> 
            <div className="apartments-filter__control">
                <label>Location</label>
                <select>
                    <option value="Texas">Texas</option>
                    <option value="New York">New Tork   </option>
                    <option value="Pheonix">Pheonix</option>
                </select>
            </div>
        </div>
    )
}

export default LocationFilter;
