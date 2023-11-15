import { styled } from "styled-components";
import Img1 from "../img/projectImg.png";
import Img4 from "../img/stackover.png";
import { useState } from "react";
import Img5 from "../img/StackLogin.png";
import Img6 from "../img/StackLogout.png";
import nyoung1 from "../img/nyoung1.png";
import nyoung2 from "../img/nyoung2.png";
import nyoung3 from "../img/nyoung3.png";
import webNyoung1 from "../img/webNyoung1.png";
import webNyoung2 from "../img/webNyoung2.png";
import webNyoung3 from "../img/webNyoung3.png";
import webNyoung4 from "../img/webNyoung4.png";
import mainNyoung from "../img/mainNyoung.png";
import nyoung4 from "../img/nyoung4.png";
import nyoung5 from "../img/nyoung5.png";
import webNyoung5 from "../img/webNyoung5.png";
import webNyoung6 from "../img/webNyoung6.png";
import projectMainImg from "../img/projecttycoon.png";
import projectMainImg2 from "../img/projectMain.png.jpg";
import newpage1 from "../img/newpage1.png";
import newpage2 from "../img/newproject2.png";
import mypage1 from "../img/mypage1.png";
import mypage2 from "../img/mypage2.png";
import mypage3 from "../img/mypage3.png";
import mypage4 from "../img/mypage4.png";

import { AiOutlineCloseSquare } from "react-icons/ai";
const BlackWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  height: 100%;
`;
const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  z-index: 200;
  box-sizing: border-box;
  margin: 0 auto;
  width: 90%;
  height: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  background-color: white;
  border-radius: 14px;
  /* padding: 12px; */
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
`;
const CloseBox = styled.div`
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: right;
  /* height: 45px; */
  width: 100%;
  cursor: pointer;
`;
const Left = styled.div`
  box-sizing: border-box;
  padding: 8px;
  width: 35%;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    max-width: 760px;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Right = styled.div`
  border-radius: 14px;
  box-sizing: border-box;
  padding: 8px;
  width: 65%;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    max-width: 760px;
    width: 100%;
  }
`;
const ImgWrap = styled.div`
  box-sizing: border-box;
  padding: 4px;
  width: 100%;
  height: 250px;
  @media screen and (max-width: 768px) {
    height: 230px;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
  }
  @media screen and (max-width: 400px) {
    height: 150px;
  }
`;
const ContentBox = styled.div`
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    overflow-y: scroll;
  }
`;
const FontBox = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;
const Font = styled.div`
  line-height: 1.3;
  padding: 4px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight || "800"};
`;
const SubFont = styled.div`
  line-height: 1.3;
  font-size: 17px;
  color: #505050;
  padding: 4px;
  font-weight: 800;
`;
const TitleBox = styled.div`
  padding: 4px;
  margin-bottom: 20px;
`;
const ButBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
`;
const But = styled.div`
  border: 1px gray solid;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;
const SmallLeft = styled.div`
  width: 68%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SmallRight = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SmallWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-top: ${(props) => props.marginTop};
  border-bottom: ${(props) => props.borderBottom};
`;
const Page = styled.img`
  width: 49%;
  height: 180px;
  background-color: gray;
`;
const SkillWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;
const Skill = styled.div`
  background-color: #93bfcf;
  color: white;
  border-radius: 17px;
  padding: 12px;
  max-width: 300px;
`;
const A = styled.a`
  color: #505050;
  padding: 4px;
`;
function ProjectModal4(props) {
  const HandleCloseModal = () => {
    props.setCloseModal4(false);
  };
  return (
    <div>
      <BlackWrap onClick={HandleCloseModal}></BlackWrap>
      <ModalWrap>
        <CloseBox onClick={HandleCloseModal}>
          <AiOutlineCloseSquare size={"30"} />
        </CloseBox>
        <ContentBox>
          <Left>
            <ImgWrap>
              <Img src={projectMainImg}></Img>
            </ImgWrap>
            <FontBox>
              <Font>💡 ProjectTycoon</Font>
              <Font fontSize={"15px"} color={"#505050"}>
                같은 학원 내에 다양한 교육과정을 배우고 있는 수강생을 위해
                프로젝트를 개설 할 수 있는 플렛폼을 만든 사이트 입니다.
              </Font>
            </FontBox>
            <FontBox>
              <Font>🔎 바로가기</Font>
              <A
                href="http://projecttycoon.com/"
                fontSize={"14px"}
                color={"gray"}
              >
                ProjectTycoon
              </A>
              <A
                href="https://github.com/codestates-seb/seb42_pre_037"
                fontSize={"14px"}
                color={"gray"}
              >
                Github
              </A>
              <A
                href="https://www.figma.com/file/dVpy4wH9k2plB0gPeD7Zuu/Untitled?type=design&node-id=0-1&mode=design&t=AK95WfXl7eQqj8rU-0"
                fontSize={"14px"}
                color={"gray"}
              >
                Figma
              </A>
              {/* <A href='https://documenter.getpostman.com/view/24686427/2s93CGSbPy' fontSize={'14px'} color={'gray'}>참고문서</A> */}
            </FontBox>
            <FontBox>
              <Font>🙋‍♀️ 페이지</Font>
              <Font fontSize={"15px"} color={"#505050"}>
                랜딩 페이지(홈 페이지)
              </Font>
              <Font fontSize={"15px"} color={"#505050"}>
                프로젝트 개설 페이지
              </Font>
              <Font fontSize={"15px"} color={"#505050"}>
                마이페이지
              </Font>
            </FontBox>
            <FontBox>
              <Font>👨‍👨‍👧‍👧 팀원 정보</Font>
              <Font fontSize={"15px"} color={"#505050"}>
                프론트엔드:3명
              </Font>
              <Font fontSize={"15px"} color={"#505050"}>
                백엔드:6명
              </Font>
            </FontBox>
            <FontBox>
              <Font>🔨 사용 스킬</Font>
              <Font fontSize={"15px"} color={"#505050"}>
                프론트엔드
              </Font>
              <SkillWrap>
                <Skill>React</Skill>
                <Skill>Axios</Skill>
                <Skill>Styledcomponent</Skill>
                <Skill>Css</Skill>
                <Skill>Css</Skill>
              </SkillWrap>
              <Font fontSize={"15px"} color={"#505050"}>
                백엔드
              </Font>
              <SkillWrap>
                <Skill>Java</Skill>
                <Skill>Axios</Skill>
                <Skill>Styledcomponent</Skill>
                <Skill>Css</Skill>
                <Skill>Css</Skill>
              </SkillWrap>
            </FontBox>
          </Left>
          <Right>
            <TitleBox>
              <Font>맡은 페이지 & 사용 기술</Font>
            </TitleBox>
            <SmallWrap>
              <SmallLeft>
                <But>데스크탑</But>
              </SmallLeft>
              <SmallRight>
                <But>모바일</But>
              </SmallRight>
            </SmallWrap>
            <Font>👉 랜딩 페이지(홈 페이지)</Font>
            <SubFont>-projecttycoon 의 첫 페이지 입니다.</SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={projectMainImg}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={projectMainImg2}></Img>
              </SmallRight>
            </SmallWrap>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={nyoung3}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={webNyoung2}></Img>
              </SmallRight>
            </SmallWrap>
            <Font>👉 프로젝트 개설 페이지</Font>
            <SubFont>
              -장바구니 아이콘 버튼을 클릭하면 LocalStorege 안에 저장할 수
              있습니다.
            </SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={newpage1}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={newpage2}></Img>
              </SmallRight>
            </SmallWrap>
            <Font>👉 마이페이지</Font>
            <SubFont>- .</SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={mypage1}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={mypage3}></Img>
              </SmallRight>
            </SmallWrap>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={mypage2}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={mypage4}></Img>
              </SmallRight>
            </SmallWrap>
          </Right>
        </ContentBox>
      </ModalWrap>
    </div>
  );
}
export default ProjectModal4;
