import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Autoplay } from 'swiper/modules';

import Calculator from '../../assets/svg/Calculator.svg?react';
import MoneyFeeling from '../../assets/svg/MoneyFeeling.svg?react';
import SmileGirl from '../../assets/svg/SmileGirl.svg?react';
import SurprisingBoy from '../../assets/svg/SurprisingBoy.svg?react';
import styled from 'styled-components';

const StyledSwiper = styled(Swiper)`
  .swiper {
    width: 121px;
    height: 121px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

function MobileSwiperLogo() {
  return (
    <div className="tablet:visible notTablet:hidden w-[121px]">
      <StyledSwiper
        effect={'cube'}
        grabCursor={false}
        allowTouchMove={false}
        cubeEffect={{ shadow: false }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        rewind={true}
        loop={true}
        modules={[Autoplay, EffectCube]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Calculator />
        </SwiperSlide>
        <SwiperSlide>
          <SmileGirl />
        </SwiperSlide>
        <SwiperSlide>
          <MoneyFeeling />
        </SwiperSlide>
        <SwiperSlide>
          <SurprisingBoy />
        </SwiperSlide>
      </StyledSwiper>
    </div>
  );
}

export default MobileSwiperLogo;
