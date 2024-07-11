import { useEffect, useState, Children, cloneElement, useRef } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productStar from "../../../assets/portfolio/Screenshot_1.png"
import stepikCert from "../../../assets/portfolio/Screenshot_5.png"
import slurmCert from "../../../assets/portfolio/slurm-certificate-Docker.png"
import productStarMob from "../../../assets/portfolio/mobile/Screenshot_1_mob.png"
import stepikCertMob from "../../../assets/portfolio/mobile/Screenshot_5_mob.png"
import slurmCertMob from "../../../assets/portfolio/mobile/slurm-mob.png"
import './MySlider.css';


// // Core modules imports are same as usual
// import { Navigation, Pagination } from 'swiper/modules';
// // Direct React component imports
// import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';

// Styles must use direct files imports
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination.scss'; // Pagination module
// import 'swiper/swiper-bundle.min.css';
// import "./swiper-bundle.css";
import "swiper/swiper-bundle.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, A11y, Pagination, Scrollbar, EffectFade, EffectCreative } from "swiper/modules";

const StyledDiv = styled.div`

    /* display: flex;
    flex-wrap: wrap;
    margin: 0 auto; */
`

const StyledCert = styled.picture`
    display: flex;
    align-items: center;
    object-fit: contain;
    height: 424px;

    img {
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        /* max-width: 280px; */
        max-height: 198px;
        
    }

`
const SliderTitle = styled.h2`

`

const StyledSliderContainer = styled.div`

    /* height: 150px;
    width: 450px; */
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    margin: 0 auto;

    .arrow {
        cursor: pointer;
    }

    
`

const StyledWindow = styled.div`

    height: 424px;
    width: 600px;
    /* height: 100%;
    width: 100%; */
    overflow: hidden;
    /* border: 3px solid orange; */
    box-shadow: 0px 0px 10px #2b6370;
    border-radius: 10px;
    /* background-color: blue; */

    @media (max-width: 768px) {
        max-width: 280px;
        max-height: 198px;
        
    }
`

// const swiper = new Swiper('.swiper', {
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
//  });

export const MySlider = () => {
  return (
    
    // <StyledWindow>

<Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    //   effect={'creative'}
    //   creativeEffect={{
    //     prev: {
    //       shadow: true,
    //       translate: [0, 0, -400],
    //     },
    //     next: {
    //       translate: ['100%', 0, 0],
    //     },
    //   }}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative]}
      navigation
      pagination = {{clickable: true}}
      loop
      cssMode = {true}
      autoHeight={false}
    //   centeredSlides={true}
    //   effect="fade"
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      
    <StyledWindow>

      <SwiperSlide>
            <StyledDiv>
                <StyledCert >
                    <source media="(min-width: 768px)" srcSet={productStar}/>
                    <source media="(max-width: 768px)" srcSet={productStarMob}/>
                    <img src={productStar} alt="Продуктстар"/>
                </StyledCert>
            </StyledDiv>
      </SwiperSlide>


        <SwiperSlide>

            <StyledDiv>
                <StyledCert>
                    <source media="(min-width: 768px)" srcSet={stepikCert}/>
                    <source media="(max-width: 768px)" srcSet={stepikCertMob}/>
                    <img src={stepikCert} alt="Степик"/>
                </StyledCert>
            </StyledDiv>

        </SwiperSlide>


        <SwiperSlide>
            <StyledDiv>
                <StyledCert>
                    <source media="(min-width: 768px)" srcSet={slurmCert}/>
                    <source media="(max-width: 768px)" srcSet={slurmCertMob}/>
                    <img src={slurmCert} alt="Слерм"/>
                </StyledCert>
            </StyledDiv>
        </SwiperSlide>
        </StyledWindow>

      ...
    </Swiper>

    // </StyledWindow>

    // </StyledSliderContainer>

  );
};