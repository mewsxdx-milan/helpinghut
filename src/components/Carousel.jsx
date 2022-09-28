import './carousel.css'
import React from 'react'
import { Carousel } from 'bootstrap'
import hslide1 from '../assets/hslide1.jpg'
import hslide2 from '../assets/hslide2.jpeg'
import hslide3 from '../assets/hslide3.jpg'
import hslide4 from '../assets/hslide4.jpg'
import hslide5 from '../assets/hslide5.jpg'

export default function Caarousel() {
  return (
 
    <div className='outer0'>
     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={hslide1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={hslide2} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={hslide3} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={hslide4} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={hslide5} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  
  )
}
