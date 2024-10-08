import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import react icons

import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";

import proPic from "../Profile image/pr1.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customer
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg">
            <div className="space-y-6">
              <div className="flex">
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 "
                />
                <div className="ml-2">
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-sm ">CEO, ABC Company</p>
                </div>
              </div>
              <div className="text-amber-400 flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero odio officia enim officiis assumenda ea reprehenderit
                  et deserunt commodi architecto veritatis est hic, quae
                  eligendi in nisi quis ipsum eius.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg">
            <div className="space-y-6">
              <div className="flex">
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 "
                />
                <div className="ml-2">
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-sm ">CEO, ABC Company</p>
                </div>
              </div>
              <div className="text-amber-400 flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero odio officia enim officiis assumenda ea reprehenderit
                  et deserunt commodi architecto veritatis est hic, quae
                  eligendi in nisi quis ipsum eius.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg">
            <div className="space-y-6">
              <div className="flex">
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 "
                />
                <div className="ml-2">
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-sm ">CEO, ABC Company</p>
                </div>
              </div>
              <div className="text-amber-400 flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero odio officia enim officiis assumenda ea reprehenderit
                  et deserunt commodi architecto veritatis est hic, quae
                  eligendi in nisi quis ipsum eius.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg">
            <div className="space-y-6">
              <div className="flex">
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 "
                />
                <div className="ml-2">
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-sm ">CEO, ABC Company</p>
                </div>
              </div>
              <div className="text-amber-400 flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero odio officia enim officiis assumenda ea reprehenderit
                  et deserunt commodi architecto veritatis est hic, quae
                  eligendi in nisi quis ipsum eius.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg">
            <div className="space-y-6">
              <div className="flex">
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 "
                />
                <div className="ml-2">
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-sm ">CEO, ABC Company</p>
                </div>
              </div>
              <div className="text-amber-400 flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero odio officia enim officiis assumenda ea reprehenderit
                  et deserunt commodi architecto veritatis est hic, quae
                  eligendi in nisi quis ipsum eius.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
