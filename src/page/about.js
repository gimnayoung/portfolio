import { styled } from "styled-components";
import AboutImg from "../img/aboutimg.jpg";
import Modal from "../components/modal";

import { BsFillPersonFill } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { HiOutlineHome } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
// import {HiOutlineMail} from 'react-icons/hi'
import { BsGithub } from "react-icons/bs";
import { useState } from "react";

//해야할일 적어놓기
//링크로 연결해야함 (?)
//밑으로 스크롤해서 나오게하던가 아니면 라이브러리 이용해서 하던가 해야함 

const AboutWrap = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
`;
const ImgWrap = styled.div`
  max-width: 300px;
`;
const Img = styled.img`
  max-width: 100%;
  border-radius: 47%;
`;
const Wrap = styled.div`
  padding: 8px;
  width: 1100px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Dark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);

  opacity: 0;
  transition: all 0.2s linear;
`;
const Puls = styled.div`
  position: absolute;
  right: 60px;
  opacity: 0;
  transition: all 0.2s linear;
`;
const Span = styled.span`
  position: absolute;
  color: white;
  right: 60px;
  font-weight: 600;
  top: 50%;
`;
const Box = styled.div`
  position: relative;
  margin-right: 4px;
  padding: 4px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: 120px;
  border: 1px gray solid;
  border-radius: 5px;
  ${Dark}:hover {
    /* background:rgba(0, 0, 0, 0.65);  */
    opacity: 0.8;
    cursor: pointer;
  }
`;

const IconWrap = styled.div`
  /* width: 650px; */
  display: flex;
  /* border: 1px red solid; */
  flex-direction: column;
  justify-content: space-evenly;
`;
const Bottom = styled.div`
  display: flex;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
  background-color: #1e74c7;
  border-radius: 50%;
  width: 84px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Font = styled.div`
  font-weight: 800;
  color: gray;
`;
const Title = styled.h1`
  width: 150px;
  font-size: 20px;
  font-weight: 800;
  margin: 0 auto;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-around;
`;

function About() {
  const [OnModal, setOffModal] = useState(false);

  const openModal = () => {
    setOffModal(true);
    console.log(OnModal);
  };
  return (
    <>
      <AboutWrap>
        <Wrap>
          <Title>✨ About Me</Title>
          <Contents>
            <ImgWrap>
              <Img src={AboutImg}></Img>
            </ImgWrap>
            <IconWrap>
              <Top>
                <Box onClick={openModal}>
                  <Icon>
                    <BsFillPersonFill size={"35px"}></BsFillPersonFill>
                  </Icon>
                  <Font>김나영</Font>
                  <Dark>
                    <Span>더보기 클릭</Span>
                  </Dark>
                </Box>
                <Box>
                  <Icon>
                    <LiaBirthdayCakeSolid size={"35px"} />
                  </Icon>
                  <Font>1999.10.26</Font>
                </Box>
                <Box>
                  <Icon>
                    <HiOutlineHome size={"35px"} />
                  </Icon>
                  <Font>서울시 은평구</Font>
                </Box>
              </Top>
              <Bottom>
                <Box>
                  <Icon>
                    <FiPhoneCall size={"35px"} />
                  </Icon>
                  <Font>010.9961.5320</Font>
                </Box>
                <Box>
                  <Icon>
                    <BsGithub size={"35px"} />
                  </Icon>
                  <Font>gimnayoung</Font>
                  <Dark>
                    <Span>더보기 클릭</Span>
                  </Dark>
                </Box>
                <Box>
                  <Icon>
                    <BsGithub size={"35px"} />
                  </Icon>
                  <Font>kny_7_@naver.com</Font>
                  
                </Box>
              </Bottom>
            </IconWrap>
          </Contents>
        </Wrap>
      </AboutWrap>
      {/* {OnModal && <Modal setOffModal={setOffModal} />} */}
    </>
  );
}
export default About;
