import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Testimonials = () => {

    const clients = [
        {
            img: profilePic1,
            review:"I have been using this product for a few weeks now and i can honestly say that it has made my skin look flawless",
        },
        {
            img: profilePic2,
            review:"I have been using this product for a few weeks now and i can honestly say that it has made my skin look flawless",
        },
        {
            img: profilePic3,
            review:"I have been using this product for a few weeks now and i can honestly say that it has made my skin look flawless",
        },
        {
            img: profilePic4,
            review:"I have been using this product for a few weeks now and i can honestly say that it has made my skin look flawless",
        }
        ]

    return(
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
                <div className="blur t-blur2" style={{background: "skyvlue"}}></div>
            </div>

            {/* slider */}
            <Swiper
            // modules={[Pagination]}
            // spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
    )
}

export default Testimonials