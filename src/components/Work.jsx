import './work.css'
import React from 'react'
import udaan from '../assets/Udaann.jpg'
import Cards from './Cards'
import darpanlogo from '../assets/Darpan-logo.png'
import nitiayog from '../assets/NITI_Aayog.png'
export default function Work() {
  return (
    <div className='outer'>
        <div className="inner">
            <div className="title">
            <h1>Our Work</h1>
            </div>
            <div className="cardpane">
           <Cards/>    
            </div>
            <div className="char">
            <div className="left">
              <h3>helpinghutt</h3>
             <p>Helping Hut is a not for profit non government organization with the visions like helping poor in any way possible, stopping beggary by giving them some occupation and helping poor kids in getting education.</p>
                <span><img src={darpanlogo} alt="" /></span>
                <span><img className='img2' src={nitiayog} alt="" /></span>
            </div>
            <div className="center">
              <div className="links">    
              <h3>Quick Links</h3>
              <a href=''>Terms And Conditions</a>
              <a href=''>Privacy Policy</a>
            <a href=''>Publicationss</a>
              <a href=''>Partner with us</a>
              </div>
            </div>
            <div className="center">
              <div className="links">    
              <h3>Get Staretd</h3>
              <a href=''>Careers</a>
              <a href=''>partnership</a>
             <a href=''>Volunteer</a>
         
              </div>
            </div>
            <div className="right">
              <div className="content">    
              <h3>Contact Us</h3>
              <ul>
              <h6>  Plot No.: 147 A, Street No. 5, D-Block, Bharat Vihar, Kakrola, Dwarka, Delhi - 110078</h6>
              <h6>+91 8924879117</h6>
              <h6>contact@helpinghutngo.in</h6>

              </ul>
         

         
              </div>
            </div>
            </div>

           
        </div>

    </div>
  )
}
