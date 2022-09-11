/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { clientsData } from "../Data/Home/ClientsData";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSlider = () => {
  return (
    <>
      <div className="box-swiper">
        <div className="swiper-container swiper-group-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           
          
            navigation={{
              prevEl: ".swiper-button-prev-4",
              nextEl: ".swiper-button-next-4",
            }}
            className="swiper-wrapper pb-70 pt-5"
          >
            {clientsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-slide active" >
                  <div
                    
                    className="col-lg-8 col-md-8 col-sm-8 col-8 text-center"
                  >
                    <Image
                      alt={item.alt}
                      title={item.alt}
                      src={item.img}
                      width={150}
                      height={150}
                    
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-button-next swiper-button-next-4" />
        <div className="swiper-button-prev swiper-button-prev-4" />
      </div>
    </>
  );
};

export default TestimonialSlider;
