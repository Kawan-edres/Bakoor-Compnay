import TestimonialSlider from "../slider/Testimonial";

const AboutClients = () => {
    return (
        <section className="section-box">
        <div className="container mt-10">
          <div className="row">
            <div className="col-lg-9 col-sm-8">
              <h3 className="text-heading-1 mb-10">Our Happy Clients</h3>
              <p className="text-body-lead-large color-gray-600">
                Know about our clients, we are an Iraq corporate brand
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-140">
          <TestimonialSlider />
        </div>
      </section>
    );
}

export default AboutClients;