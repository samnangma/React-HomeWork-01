// rfce

import React from 'react'

function Carosel() {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/3d-landscape-with-tree-against-moonlit-sky_1048-12527.jpg?size=626&ext=jpg&uid=R97077214&semt=sph" class="d-block w-100" alt="moon"/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-photo/aesthetic-background-with-white-crescent-moon_53876-127203.jpg?size=626&ext=jpg&uid=R97077214&semt=sph" class="d-block w-100" alt="sky"/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-vector/kids-observe-night-sky-with-telescope_1308-114551.jpg?size=626&ext=jpg&uid=R97077214&semt=sph" class="d-block w-100" alt="kid"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carosel