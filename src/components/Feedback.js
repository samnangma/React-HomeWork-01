import React from 'react'
import "../styles/Feedback.css"
const Feedback = () => {
  return (
    <section>
    <div className="row mt-5 pt-5 d-flex justify-content-center">
      <div className="col-md-10 col-xl-8 text-center">
        <h3 className="mb-4">What people said about us?</h3>
        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
        We love hearing from our students and families! Send us your feedback using the form on our Contact Us page.
        </p>
      </div>
    </div>
  
    <div className="row me-5 ms-5 text-center d-flex align-items-stretch">
      <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
        <div className="card testimonial-card">
          <div className="card-up"></div>
          <div className="avatar mx-auto bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle img-fluid" />
          </div>
          <div className="card-body">
            <h4 className="mb-4">Maria Smantha</h4>
            <hr />
            <p className="dark-grey-text mt-4">
              <i className="fas fa-quote-left pe-2"></i>I know if there will ever be a good life for myself and my children then I must finish my GED.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
        <div className="card testimonial-card">
          <div className="card-up"></div>
          <div className="avatar mx-auto bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle img-fluid" />
          </div>
          <div className="card-body">
            <h4 className="mb-4">Lisa Cudrow</h4>
            <hr />
            <p className="dark-grey-text mt-4">
              <i className="fas fa-quote-left pe-2"></i>Not only would we consider hiring one of Second Start’s Office Program graduates if an opening occurred, we actually did hire the first intern who practiced here.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-0 d-flex align-items-stretch">
        <div className="card testimonial-card">
          <div className="card-up" ></div>
          <div className="avatar mx-auto bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle img-fluid" />
          </div>
          <div className="card-body">
            <h4 className="mb-4">John Smith</h4>
            <hr />
            <p className="dark-grey-text mt-4">
              <i className="fas fa-quote-left pe-2"></i>I came in every morning and said to myself, ‘I am here and it’s time again to start off my day accomplishing the goals I have set for myself’. This is what Second Start is all about–getting yourself on your feet and running for the medal!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Feedback
