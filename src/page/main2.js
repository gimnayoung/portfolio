import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import AboutImg from "../img/aboutimg.jpg";
import Modal from "../components/modal";

import { BsFillPersonFill } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { HiOutlineHome } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
// import {HiOutlineMail} from 'react-icons/hi'
import { BsGithub } from "react-icons/bs";
// import { useState } from "react";


const animation = keyframes`
  50% {
    transform: scale(1.05);
  }
`;
const Wrap=styled.div`

margin: 0 auto;
display: flex;
padding: 0;
box-sizing: border-box;
max-width: 1200px;
flex-direction: column;

`
const IntroduceWrap=styled.div`
margin-bottom: 30px;
`
const Introduce=styled.h4`
font-size: 30px;
font-weight: 800;
@media screen and (max-width: 974px) {
    font-size: 25px;
  }
  @media screen and (max-width: 750px) {
    font-size: 20px;
  }
`
const ContentWrap=styled.div`
box-sizing: border-box;
display: flex;
justify-content: space-between;
margin: 0 auto;
max-width: 1100px;
width: 100%;
padding: 20px;
background-color: white;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
@media screen and (max-width: 630px) {
  justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }
`
const Content=styled.div`
display: flex;
align-items: center;
align-content: center;

`
const ImgWrap=styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 300px;
height:340px;
width: 100%;
min-width: 300px;
`
const Img=styled.img`
width: 100%;
height:100%;
border-radius: 47%;
`
const BoxWrap=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 20px 0px;
`
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
const Span = styled.span`
  position: absolute;
  color: white;
  font-weight: 600;
  top: 50%;
  left:40%;
`;
const AnimationBox=styled.div`
position: relative;
border: 1px gray solid;
border-radius: 5px;
width: 300px;
padding: 8px;
align-items: center;
display: flex;
${Dark}:hover {
    /* background:rgba(0, 0, 0, 0.65);  */
    opacity: 0.8;
    cursor: pointer;
  }
  animation: ${animation} 5s infinite;
  @media screen and (max-width: 974px) {
    height:60px;
  }
  @media screen and (max-width: 750px) {
    width: 250px;
    height:60px;
    font-size: 14px;
  }
`
const Box=styled.div`
position: relative;
border: 1px gray solid;
border-radius: 5px;
width: 300px;
padding: 8px;
align-items: center;
display: flex;
${Dark}:hover {
    /* background:rgba(0, 0, 0, 0.65);  */
    opacity: 0.8;
    cursor: pointer;
  }
  @media screen and (max-width: 974px) {
    height:60px;
  }
  @media screen and (max-width: 750px) {
    width: 250px;
    height:60px;
  }
`
const Icon=styled.div`
background-color: #1e74c7;
  border-radius: 50%;
  width: 84px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 8px;
  @media screen and (max-width: 974px) {
    max-width: 74px;
    width: 100%;
  height: 70px;
  }
`
const Font=styled.div`
font-weight: 800;
  color: gray;
`
const Title = styled.h1`
  width: 150px;
  font-size: 20px;
  font-weight: 800;
  margin: 0 auto;
`;
function Main2(){
  const [OnModal, setOffModal] = useState(false);
  const openModal = () => {
    setOffModal(true);
    console.log(OnModal);
  };
    return(
        <Wrap>
            <IntroduceWrap>
                <Introduce>안녕하세요 :)</Introduce>
                <Introduce>프론트엔드 엔지니어 김나영 입니다.</Introduce>
            </IntroduceWrap>
            <ContentWrap>
                <ImgWrap>
                    <Img src={AboutImg}></Img>
                </ImgWrap>
                <Content>
                    <BoxWrap>
                        <AnimationBox onClick={openModal}>
                            <Icon>
                              <BsFillPersonFill size={"37px"}></BsFillPersonFill>
                            </Icon>
                            <Font>김나영 / Kim NaYoung</Font>
                            <Dark>
                                <Span>클릭해 주세요.</Span>
                            </Dark>
                        </AnimationBox>
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
                        </Box>
                        <Box>
                            <Icon>
                                <BsGithub size={"35px"} />
                            </Icon>
                            <div>
                              <Font>kny_7_@naver.com</Font>
                              <Font>contact 바로가기</Font>
                            </div>
                        </Box>
                    </BoxWrap>
                </Content>
            </ContentWrap>
            {OnModal && <Modal setOffModal={setOffModal} />}
        </Wrap>
    )
}
export default Main2;