/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import road from "../../public/assets/imgs/Home/construction.jpg"

SwiperCore.use([Autoplay, Navigation]);
const BlogSlider = () => {

    console.log(road);
    const data = [
        {
            img: "9.jpg",
            avatar: "1.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "10.jpg",
            avatar: "2.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "10.jpg",
            avatar: "2.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "10.jpg",
            avatar: "2.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
    ];


    return (
        <>
            <div className="slider-news">
                <div className="swiper-container swiper-group-1">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5",
                        }}
                        className="swiper-wrapper pb-70 pt-5 col-lg-6"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide>
                                <div className="swiper-slide active">
                                    <div className="block-news bg-7 ">
                                        <div className="item-news">
                                            <div className="row col-xl-12 col-sm-3 " style={{height:"600px",width:"600px"}}>
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="img-news col-xl-6">
                                                        <Link href="/blog-single"><a><img  src={road} alt="Agon" />
                                                        </a></Link>
                                                    </div>
                                                </div>
                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-5" />
                <div className="swiper-button-prev swiper-button-prev-5" />
            </div>


        </>
    );
};

export default BlogSlider;

