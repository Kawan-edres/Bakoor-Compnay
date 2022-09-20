/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide} from "swiper/react";
import { projectsData } from "../Data/Home/projectsData";
import {useRouter} from 'next/router'


SwiperCore.use([Autoplay, Navigation]);
const TestimonialSlider = ({data2}) => {
  const router=useRouter()
  return (
    <>
      <div className="box-swiper">
        <div className="swiper-container swiper-group-4 ">
          <Swiper
            // slidesPerView={1}
            spaceBetween={1.0}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev-6",
              nextEl: ".swiper-button-next-6",
            }}
            className="swiper-wrapper pb-100 pt-100    "
          >
            {data2.data.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  // className="swiper-slide active"
                  style={{ margin: "0 auto",cursor:"pointer" }}
                  // className='cardd'
                  onClick={()=>router.push('/projects#water')}
                >
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12  mt-20  box-hover-shadow hover-up bg-7 mlozm cardd bdr-16">
                    <Image
                      alt={item.title}
                      title={item.title}
                      src={item.cover}
                      layout="fill"
                      className="bdr-16"
                    />
                    <div className="card-mlozm bdr-16">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="box">

        <div className="swiper-button-next swiper-button-next-6" />
        <div className="swiper-button-prev swiper-button-prev-6" />
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;


