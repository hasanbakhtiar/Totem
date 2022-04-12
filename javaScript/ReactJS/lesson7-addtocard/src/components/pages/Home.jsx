import React from 'react'
import data from '../data/data'

const Home = () => {
  return (
    <div>
         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={data.productData[0].img} width="300" className="d-block " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={data.productData[1].img} width="300" className="d-block " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={data.productData[2].img} width="300" className="d-block " alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Home