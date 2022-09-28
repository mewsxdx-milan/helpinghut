import './cards.css';
import udaan from '../assets/Udaann.jpg'
import beg1 from '../assets/beg1.jpg'
import React from 'react'

export default function Cards() {
    
  return (

    <div className='outer'>
        <div className="row">
            <div className="col">
            <div className="card">
  <img src={udaan} className="cardimg" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">UDAAN STREET SCHOOL
</h5>
    <p class="card-text">Every child should have the opportunity to recieve a quality education,
Knowledge is power, it's the greatest gift you can give to someone. You can uplift someone by helping them with money,...</p>
    <a href="#" class="btn btn-primary">Support Us</a>
  </div>
</div>
            </div>
            <div className="col ">
            <div className="card">
  <img src={beg1} className="cardimg" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BEGGAR TRANSFORMATION
</h5>
    <p class="card-text">HELPING HUT helped a beggar from Dwarka ,who begged for years to survive , by providing him with a sewing machine so</p>
    <a href="#" class="btn btn-primary">Support Us</a>
  </div>
</div>
            </div>
        </div>
   

    </div>
  )
}
