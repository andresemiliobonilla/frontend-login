import React from 'react'
const Inicio = () => {

  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/id/123/1200/600" className="d-block w-100" alt="djdj" />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/124/1200/600" className="d-block w-100" alt="dkdk" />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/125/1200/600" className="d-block w-100" alt="dmd" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Inicio;
