import React from "react";
import { Flex, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default () => {
    return (
        <Flex w="100%" maxW={1440} mt="2" mb="2" mx="auto" alignItems="center" justifyContent="center">
            <Swiper pagination={true} className="mySwiper" >
                <SwiperSlide>
                    <Image zIndex="-1" position="relative" src="./images/swiper-1.gif" alt="funny dog with sun glasses" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image zIndex="-1" position="relative" src="./images/swiper-2.gif" alt="funny dog with sun glasses" />
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
};

