import React from 'react'

function PropertyType() {
    return (
        <div className="apartments-filter"> 
            <div className="apartments-filter__control">
                <label>Property Type</label>
                <select>
                    <option value="Apartment">Apartments</option>
                    <option value="House">Houses</option>
                    <option value="Dorm">Dorms</option>
                </select>
            </div>
        </div>
    )
}

export default PropertyType;
