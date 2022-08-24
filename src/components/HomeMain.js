import React from 'react'
import HomeSvg from "../images/HomePageSvg.svg";
import {Link} from "react-router-dom"

const HomeMain = () => {
  return (
    <main>
        <div className="left">
            <div className="text">
                <h1>Find Your Roommates</h1>
                <p>Sub Tagline</p>
            </div>
            <div className="btns">
                <Link to="signin" className='getStarted'>Get Started</Link>
                <Link to="signin" className='signUp'>Sign Up</Link>
            </div>
        </div>
        <div className="right">
            <div className="box">
                <img src={HomeSvg} alt="" />
            </div>
        </div>
    </main>
  )
}

export default HomeMain