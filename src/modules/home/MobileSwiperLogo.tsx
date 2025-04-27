import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Autoplay } from 'swiper/modules';

import Calculator from '../../assets/svg/Calculator.svg';
import MoneyFeeling from '../../assets/svg/MoneyFeeling.svg';
import SmileGirl from '../../assets/svg/SmileGirl.svg';
import SurprisingBoy from '../../assets/svg/SurprisingBoy.svg';
import styled from 'styled-components';
import { useCheckMobile } from '../../core/hooks/useCheckMobile';
import Image from 'next/image';

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
  const { isMobile } = useCheckMobile();

  if (!isMobile) return null;

  return (
    <div className="tablet!:visible nottablet!:hidden w-[121px]">
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
          <Image src={Calculator} alt={''} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SmileGirl} alt={''} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MoneyFeeling} alt={''} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SurprisingBoy} alt={''} />
        </SwiperSlide>
      </StyledSwiper>
    </div>
  );
}

export default MobileSwiperLogo;
