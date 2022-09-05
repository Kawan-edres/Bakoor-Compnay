/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Layout from "../components/layout/Layout";
import img from '../public/assets/imgs/Projects/sewer.jpg'
function Index8() {
  return (
    <>
      <Layout>
     
               
                
                 
                 
            
           
          
        <div className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image"><img className="img-responsive" src="assets/imgs/page/homepage8/img-2.png" alt="Agon" /></div>
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-1 mt-30">How does it works</h3>
                <p className="text-body-lead-large color-gray-600 mt-20">We find the absolute best prices on hotels &amp; flights then we pass these savings directly to you.</p>
                <div className="list-icons-round mt-40">
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".1s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/user.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Account</h4>
                    <p className="text-body-text color-gray-600 mt-5">All the necessary information to create your account are below this.</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".3s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/destination.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Select Destination</h4>
                    <p className="text-body-text color-gray-600 mt-5">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".5s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/trip.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Book a Trip</h4>
                    <p className="text-body-text color-gray-600 mt-5">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".7s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/flight.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Take your flight</h4>
                    <p className="text-body-text color-gray-600 mt-5">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-box bg-7 mt-70">
          <div className="container mt-100 mb-50">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-1 mt-30">A Simply Perfect Place To Get Lost</h3>
                <p className="text-body-lead-large color-gray-600 mt-30">Feugiat primis ligula risus auctor egestas and augue viverra mauri tortor in iaculis magna a feugiat mauris ipsum and placerat viverra tortor gravida purus.</p>
                <div className="list-icons mt-40">
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".1s"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-work.svg" /></span>
                    <h4 className="text-heading-4">Best Price Guarantee</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".3s"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-design.svg" /></span>
                    <h4 className="text-heading-4">Easy &amp; Quick Booking</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <Image  src={img} width={900} height={1000} alt="Agon" />
              </div>
            </div>
          </div>
        </div>
    
            
         
      </Layout>

    </>
  )
}

export default Index8;