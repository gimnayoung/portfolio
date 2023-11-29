import { styled } from "styled-components";
import Img1 from "../img/projectImg.png";
import Img4 from "../img/stackover.png";
import { useState } from "react";
import Img5 from "../img/StackLogin.png";
import Img6 from "../img/StackLogout.png";

import { AiOutlineCloseSquare } from "react-icons/ai";
const BlackWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100vw;
  height: 100vh;
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
  height: 220px;
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
  line-height: 1.2;
  padding: 4px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight || "800"};
`;
const SubFont = styled.div`
  line-height: 1.2;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SmallRight = styled.div`
  width: 49%;
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
function ProjectModal2(props) {
  const HandleCloseModal = () => {
    props.setCloseModal2(false);
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
              <Img src={Img4}></Img>
            </ImgWrap>
            <FontBox>
              <Font>💡 스택오버플로우</Font>
              <Font fontSize={"15px"} color={"#505050"}>
                프로그래밍과 소프트웨어 개발 관련된 질문과 답변을 공유하고
                토론하는 커뮤니티 기반의 웹사이트"Stack Overflow"를 클론코딩한
                팀 프로젝트 입니다.
              </Font>
            </FontBox>
            <FontBox>
              <Font>🔎 바로가기</Font>
              <Font fontSize={"12px"} color={"#505050"}>
                * 배포하였으나 기간이 만료 되었습니다.
              </Font>
              <A
                href="https://www.figma.com/file/tJO0cq3cc7qQpBeRNnbTHh/myStackoverflow?type=design&node-id=0-1&mode=design&t=ucZuc0EI1do7FnEH-0"
                fontSize={"14px"}
                color={"gray"}
              >
                Figma
              </A>
              <A
                href="https://github.com/codestates-seb/seb42_pre_037"
                fontSize={"14px"}
                color={"gray"}
              >
                Github
              </A>
              <A
                href="https://documenter.getpostman.com/view/24686427/2s93CGSbPy"
                fontSize={"14px"}
                color={"gray"}
              >
                참고문서
              </A>
            </FontBox>
            <FontBox>
              <Font>🙋‍♀️ 맡은 역할</Font>
              <Font fontSize={"15px"} color={"#505050"}>
                Login&Logout Header
              </Font>
              <Font fontSize={"15px"} color={"#505050"}>
                Nav
              </Font>
            </FontBox>
            <FontBox>
              <Font>👨‍👨‍👧‍👧 팀원 정보</Font>
              <Font fontSize={"15px"} color={"#505050"}>
                프론트엔드:4명
              </Font>
              <Font fontSize={"15px"} color={"#505050"}>
                백엔드:3명
              </Font>
            </FontBox>
            <FontBox>
              <Font>🔨 사용 스킬</Font>
              <Font fontSize={"15px"} color={"#505050"}>
                프론트엔드
              </Font>
              <SkillWrap>
                <Skill>React</Skill>
                <Skill>Zustand</Skill>
                <Skill>Tailwind CSS</Skill>
                <Skill>Styled-Components</Skill>
              </SkillWrap>
              <Font fontSize={"15px"} color={"#505050"}>
                백엔드
              </Font>
              <SkillWrap>
                <Skill>Spring Boot</Skill>
                <Skill>MYSQL</Skill>
                <Skill>AWS S3</Skill>
                <Skill>AWS EC2</Skill>
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
            </SmallWrap>
            <Font>👉 Login&Logout Header</Font>
            <SubFont>
              -로그인 했을때와 로그아웃을 했을때 Zustand 상태관리 라이브러리를
              이용하여 Header 가 변할 수 있도록 구현했습니다.
            </SubFont>
            <Font fontSize={"13px"} color={"#505050"}>
              [Login Header]
            </Font>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={Img6}></Img>
              </SmallLeft>
            </SmallWrap>
            <Font fontSize={"13px"} color={"#505050"}>
              [Logout Header]
            </Font>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={Img4}></Img>
              </SmallLeft>
            </SmallWrap>
            <Font>👉 Nav</Font>
            <SubFont>-TailWind Css를 사용하여 Nav를 구현 했습니다.</SubFont>
            <SmallWrap borderBottom={"2px gray solid"} marginTop={"8px"}>
              <SmallLeft>
                <Img src={Img4}></Img>
              </SmallLeft>
            </SmallWrap>
          </Right>
        </ContentBox>
      </ModalWrap>
    </div>
  );
}
export default ProjectModal2;
