'use client';

import React from 'react';
import HomeRightBackground from '../assets/images/HomeRightBackground.png';
import HomeLeftBackground from '../assets/images/HomeLeftBackground.png';
import MobileSwiperLogo from '../modules/home/MobileSwiperLogo';
import Button from '../components/Button/Button';
import { routePath } from '../modules/router/routePath';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
function HomePage() {
  const router = useRouter();
  return (
    <div>
      <Image
        src={HomeLeftBackground}
        alt="background"
        className="w-[30%] max-w-[30%] min-w-[200px] h-[100vh] absolute z-[-1] left-[-40px] hidden tablet:inline"
      />
      <Image
        src={HomeRightBackground}
        alt="background"
        className="w-[30%] max-w-[30%] min-w-[200px] h-[100vh] absolute z-[-1] right-[-40px] hidden tablet:inline"
      />

      <div className="flex flex-col items-center justify-center gap-[38px] w-[100vw] h-[100vh] text-center whitespace-pre">
        <MobileSwiperLogo />
        <p className="text-[#000000] [font-size:_clamp(2rem,5vw,2.5rem)] font-bold ">
          {'덮집회의로\n 정산을 쉽고, 빠르게,\n 그리고 차분하게'}
        </p>
        <p className="[font-size:_clamp(1rem,2vw,1.25rem)] font-[500]">
          {
            '덮집회의 웹서비스의 도움으로 정산의 고통을 줄이고,\n 친구들과 싸우는 걸 방지하여\n 부디 멋진 여행을 끝마쳐보도록 합시다.'
          }
        </p>
        <Button
          text="시작하기"
          onClick={() => {
            router.push(routePath.setTitle);
          }}
          className={
            'bg-primary-dark [width:_clamp(20rem,15vw,50rem)]  text-[16px] font-semibold'
          }
        />
      </div>
    </div>
  );
}

export default HomePage;
