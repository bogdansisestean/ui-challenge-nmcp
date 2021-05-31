import React from 'react'

function Price() {
    return (
        <div className="apartments-filter"> 
            <div className="apartments-filter__control">
                <label>Price</label>
                <select>
                    <option value="Cheap">0-2500$</option>
                    <option value="Medium">2500-5000$</option>
                    <option value="High">5000+</option>
                </select>
            </div>
        </div>
    )
}

export default Price;
