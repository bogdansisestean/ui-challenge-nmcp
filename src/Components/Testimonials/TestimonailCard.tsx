import React from 'react'
type Props={
    testimonial: string,
    picture: string,
    name: string,
    position: string
}
function TestimonailCard({testimonial, picture, name, position}: Props) {
    return (
    
        <div className="col-4 ">
            <div className="row">
                <p className="black-font">{testimonial}</p>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={picture}/>
                </div>
                <div className="col-8">
                    <h4 className="black-font">{name}</h4>
                    <p className="black-font">{position}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonailCard
