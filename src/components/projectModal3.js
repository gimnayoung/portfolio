import { styled } from "styled-components";
import Img1 from "../img/projectImg.png";
import Img4 from "../img/stackover.png";
import { useState } from "react";
import { useTheme } from "../store/themeProvider";
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
 background-color: ${(props) =>
    props.theme === "light" ? "white" : "rgb(35, 35, 35)"};
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
color: ${(props) =>
    props.theme === "light" ? "#505050" : "rgb(255, 255, 255)"};
  line-height: 1.3;
  padding: 4px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight || "800"};
`;
const SubFont = styled.div`
  line-height: 1.3;
  font-size: 17px;
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
  color: ${(props) =>
    props.theme === "light" ? "#505050" : "rgb(255, 255, 255)"};
  padding: 4px;
`;
function ProjectModal3(props) {
  const ThemeMode = useTheme();
  const HandleCloseModal = () => {
    props.setCloseModal3(false);
  };
  return (
    <div>
      <BlackWrap onClick={HandleCloseModal}></BlackWrap>
      <ModalWrap theme={ThemeMode[0]}>
        <CloseBox onClick={HandleCloseModal}>
          <AiOutlineCloseSquare size={"30"} />
        </CloseBox>
        <ContentBox>
          <Left>
            <ImgWrap>
              <Img src={mainNyoung}></Img>
            </ImgWrap>
            <FontBox>
              <Font theme={ThemeMode[0]}>💡 N-Young 쇼핑몰</Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                가지각색의 여러 쇼핑몰 사이트 안에서 즐겨찾는 의류 상품들을
                모아놓아 이곳 저곳 찾아다닐 필요없이 한 눈에 볼 수 있는 나만의
                쇼핑몰 프로젝트 입니다.
              </Font>
            </FontBox>
            <FontBox>
              <Font theme={ThemeMode[0]}>🔎 바로가기</Font>
              <A theme={ThemeMode[0]}
                href="https://gimnayoung.github.io/react"
                fontSize={"14px"}
                color={"gray"}
              >
                N-Young
              </A>
              <A theme={ThemeMode[0]}
                href="https://www.figma.com/file/dVpy4wH9k2plB0gPeD7Zuu/Untitled?type=design&node-id=0-1&mode=design&t=7XvYBweHa93Tu1Rd-0"
                fontSize={"14px"}
                color={"gray"}
              >
                Figma
              </A>
              <A theme={ThemeMode[0]}
                href="https://github.com/gimnayoung/react"
                fontSize={"14px"}
                color={"gray"}
              >
                Github
              </A>
            </FontBox>
            <FontBox>
              <Font theme={ThemeMode[0]}>🙋‍♀️ 페이지</Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                메인 페이지
              </Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                상품 디테일 페이지
              </Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                마이 페이지
              </Font>
            </FontBox>
            <FontBox>
              <Font theme={ThemeMode[0]}>🔨 사용 스킬</Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                프론트엔드
              </Font>
              <SkillWrap>
                <Skill>React</Skill>
                <Skill>Axios</Skill>
                <Skill>LocalStorege</Skill>
                <Skill>StyledComponent</Skill>
              </SkillWrap>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                배포
              </Font>
              <SkillWrap>
                <Skill>Github-Page</Skill>
              </SkillWrap>
            </FontBox>
          </Left>
          <Right>
            <TitleBox>
              <Font theme={ThemeMode[0]}>맡은 페이지 & 사용 기술</Font>
            </TitleBox>
            <SmallWrap>
              <SmallLeft>
                <But>데스크탑</But>
              </SmallLeft>
              <SmallRight>
                <But>모바일</But>
              </SmallRight>
            </SmallWrap>
            <Font theme={ThemeMode[0]}>👉 메인 페이지</Font>
            <SubFont>
              -상품 더보기 버튼을 클릭하면 Axios의 Get메소드를 이용해 상품들을 더 불러 올 수
              있습니다.
            </SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={nyoung1}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={webNyoung1}></Img>
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
            <Font theme={ThemeMode[0]}>👉 상품 디테일 페이지</Font>
            <SubFont>
              -장바구니 아이콘 버튼을 클릭하면 LocalStorege안에 장바구니 공간에 저장이 됩니다.
            </SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={nyoung2}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={webNyoung3}></Img>
              </SmallRight>
            </SmallWrap>
            <Font theme={ThemeMode[0]}>👉 장바구니 & 찜 페이지</Font>
            <SubFont>
              -LocalStorege의 장바구니 저장공간에서 꺼내와 장바구니 상품들을 볼 수 있습니다.
            </SubFont>
            {/* <SubFont>
              -장바구니 상품들은 삭제가 가능합니다.
            </SubFont> */}
            <SubFont>
            -LocalStorege안에 최근 본 상품들이 저장 되어있고, 최신순으로 정렬 하여 볼 수 있습니다.
            </SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={nyoung4}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={webNyoung5}></Img>
              </SmallRight>
            </SmallWrap>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={nyoung5}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={webNyoung6}></Img>
              </SmallRight>
            </SmallWrap>
          </Right>
        </ContentBox>
      </ModalWrap>
    </div>
  );
}
export default ProjectModal3;
