import { styled } from "styled-components";
import { useTheme } from "../store/themeProvider";
import Img1 from "../img/projectImg.png";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import img2 from "../img/portfolio2.png";
import img3 from "../img/port2.png"
import img4 from "../img/port3.png"
import img5 from "../img/port4.png"
import img6 from "../img/port5.png"
import img7 from "../img/port6.png"

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
  background-color: ${(props) =>
    props.theme === "light" ? "white" : "rgb(35, 35, 35)"};
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
  line-height: 1.2;
  padding: 4px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight || "800"};
`;
const SubFont = styled.div`
  line-height: 1.2;
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
function ProjectModal(props) {
  const ThemeMode = useTheme();
  const HandleCloseModal = () => {
    props.setCloseModal(false);
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
              <Img src={Img1}></Img>
            </ImgWrap>
            <FontBox>
              <Font theme={ThemeMode[0]}>💡 포트폴리오</Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                포트폴리오 사이트 입니다.
              </Font>
            </FontBox>
            <FontBox>
              <Font theme={ThemeMode[0]}>🔎 바로가기</Font>
              <A theme={ThemeMode[0]}
                href="https://gimnayoung.github.io/portfolio/"
                fontSize={"14px"}
                color={"gray"}
              >
                포트폴리오
              </A>
              <A theme={ThemeMode[0]}
                href="https://www.figma.com/file/2389ZPvIbQxm8PJ7fhcxGC/PortFolio?type=design&node-id=0-1&mode=design&t=7XvYBweHa93Tu1Rd-0"
                fontSize={"14px"}
                color={"gray"}
              >
                Figma
              </A>
              <A
                theme={ThemeMode[0]}
                href="https://github.com/gimnayoung/portfolio"
                fontSize={"14px"}
                color={"gray"}
              >
                Github
              </A>
            </FontBox>
            <FontBox>
              <Font theme={ThemeMode[0]}>🙋‍♀️ 페이지</Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                홈 페이지
              </Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                프로젝트 페이지
              </Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                스킬 페이지
              </Font>
              <Font fontSize={"15px"} theme={ThemeMode[0]}>
                콘텍트 페이지
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
                <Skill>StyledComponent</Skill>
                <Skill>LocalStorage</Skill>
              </SkillWrap>
              <Font fontSize={"15px"}  theme={ThemeMode[0]}>
                DB
              </Font>
              <SkillWrap>
                <Skill>FireBase</Skill>
              </SkillWrap>
              <Font fontSize={"15px"}  theme={ThemeMode[0]}>
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
            <Font theme={ThemeMode[0]}>👉 홈 페이지</Font>
            <SubFont>
              -Styled Commnent의 ThemeProvider를 이용하여 다트모드를 적용시킨 홈 페이지 입니다.
            </SubFont>
            <SubFont>
            -Localstorage를 통해 테마 모드 유지가 가능합니다.
            </SubFont>
            <SubFont>
            -반응형 웹 사이트 입니다.
            </SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={Img1}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={img2}></Img>
              </SmallRight>
            </SmallWrap>
            <Font theme={ThemeMode[0]}>👉 프로젝트 페이지</Font>
            <SubFont>
              -프로젝트를 클릭하시면 자세한 정보 창을 볼 수 있습니다.
            </SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={img3}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={img4}></Img>
              </SmallRight>
            </SmallWrap>
            <Font theme={ThemeMode[0]}>👉 스킬 페이지</Font>
            <SubFont>
              - 사용해보거나 경험해본 적 있는 스킬들을 정리해둔 페이지 입니다.
            </SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={img7}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={Img1}></Img>
              </SmallRight>
            </SmallWrap>
            <Font theme={ThemeMode[0]}>👉 콘텍트 페이지</Font>
            <SubFont>
              - 게스트 방명록 페이지 입니다.
            </SubFont>
            <SubFont>
            - FireBase의 DB를 이용하여 데이터가 저장되고 보여집니다.
            </SubFont>
            <SubFont>
            - 비밀글 쓰기가 가능합니다.
            </SubFont>
            <SmallWrap marginTop={"4px"}>
              <SmallLeft>
                <Img src={img5}></Img>
              </SmallLeft>
              <SmallRight>
                <Img src={img6}></Img>
              </SmallRight>
            </SmallWrap>
          </Right>
        </ContentBox>
      </ModalWrap>
    </div>
  );
}
export default ProjectModal;
