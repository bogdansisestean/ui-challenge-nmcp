import React from 'react'
import ArrowButton from '../GlobalComponents/ArrowButton';
import FacebookIcon from '../../Images/Social Media Icon/001-facebook.png'
import TwitterIcon from '../../Images/Social Media Icon/003-twitter.png'
import InstagramIcon from '../../Images/Social Media Icon/004-instagram.png'

function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div class="col-6">
                    <h2> Make your dreams a reality</h2>
                </div>
                <div class="col-6">
                    <ArrowButton styleButtonColor="btn-orange"/>
                </div>
            </div>
            <div className="row">
                <div class="col-3">
                    <img>
                    </img>
                    <div className="row">
                        <div className="col-4">
                            <img src={FacebookIcon}/>
                        </div>
                        <div className="col-4">
                            <img src={TwitterIcon}/>
                        </div>
                        <div className="col-4">
                            <img src={InstagramIcon}/>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <h4>Column heading</h4>
                    <ul>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h4>Column heading</h4>
                    <ul>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h4>Column heading</h4>
                    <ul>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                        <li>Link goes here</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
