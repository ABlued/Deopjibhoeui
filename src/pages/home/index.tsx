import React from 'react';
import { useNavigate } from 'react-router';
import HomepageBackground from '../../assets/images/overviewBackground.png';
import Button from '../../components/Button/Button';
import { routePath } from '../../modules/router/routePath';
import {
  MouseParallaxContainer,
  MouseParallaxChild
} from 'react-parallax-mouse';
function HomePage() {
  const navigate = useNavigate();
  return (
    <MouseParallaxContainer globalFactorX={1} globalFactorY={1} resetOnLeave>
      <div>
        <MouseParallaxChild factorX={0.05} factorY={0.1}>
          <img
            src={HomepageBackground}
            alt="background"
            className="w-[105vw] max-w-[105vw] h-[100vh] absolute z-[-1] right-[-40px]"
          />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0} factorY={0.05}>
          <div className="flex flex-col items-center justify-center gap-[38px] w-[100vw] h-[100vh] text-center whitespace-pre">
            <p className="text-[#000000] text-[48px] font-bold ">
              {'덮집회의로\n 정산을 쉽고, 빠르게,\n 그리고 차분하게'}
            </p>
            <p className="text-[24px] font-[500]">
              {
                '덮집회의 웹서비스의 도움으로 정산의 고통을 줄이고,\n 친구들과 싸우는 걸 방지하여\n 부디 멋진 여행을 끝마쳐보도록 합시다.'
              }
            </p>

            <Button
              text="시작하기"
              onClick={() => {
                navigate(routePath.setTitle);
              }}
              className={'bg-primary-dark'}
            />
          </div>
        </MouseParallaxChild>
      </div>
    </MouseParallaxContainer>
  );
}

export default HomePage;
