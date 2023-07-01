import React from "react";

export default function Banner() {
  return (
    <div className="d-flex justify-content-center p-5">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img.phonandroid.com/2023/02/tlou-episode-5-diffusion.jpg"
              class="d-block w-100 cimg rounded-2"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
              <h1 className="fs-1 ">First slide label</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JQD2MEGQ2VGU3N5RSAAMIBKJCU.jpg"
              class="d-block w-100 cimg rounded-2"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
              <h1 className="fs-1 ">First slide label</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://occ-0-299-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSbjNB9XQZk4viUCyxNxW3ohaz_CG1yhKm8mExyqV63kmaBLhDtl5oVyvrR2E5SrlhP6zeb6aAl5CqA8_27j3SrWxO-SUyToMIhg.jpg?r=e32"
              class="d-block w-100 cimg rounded-2"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
              <h1 className="fs-1 ">First slide label</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
