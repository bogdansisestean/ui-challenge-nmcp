import React from 'react'

function TestimonailCard(props) {
    return (
    
        <div className="col-4 ">
            <div className="row">
                <p className="black-font">{props.testimonial}</p>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={props.picture}/>
                </div>
                <div className="col-8">
                    <h4 className="black-font">{props.name}</h4>
                    <p className="black-font">{props.position}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonailCard
