import React from 'react'

export default function Main() {
  return (
    <main>
    <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-tw.jpg?w=960&cbr=1&q=90&fit=max" class="d-block w-100" alt="Wild Landscape"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Welcome to the Happy </h5>
          <p>This is the happy place on earth don forget to enjoy it</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" class="d-block w-100" alt="Camera"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Welcome to the Happy</h5>
          <p>This is the happy place on earth don forget to enjoy it </p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://media.newyorker.com/photos/61016c1c7a2a603b3075c7b8/16:9/w_1884,h_1060,c_limit/chayka-boredapeclub.jpg" class="d-block w-100" alt="Exotic Fruits"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Welcome to the Happy </h5>
          <p>This is the happy place on earth don forget to enjoy it</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
    </main>
  )
}
