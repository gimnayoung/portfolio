import { styled } from "styled-components"
import Img1 from "../img/projectImg.png"
import { useState } from "react";
import ProjectModal from "../components/projectModal"
import Img4 from"../img/stackover.png"
import ProjectModal2 from "../components/projectModal2"
import ProjectModal3 from "../components/projectModal3";
import nyoung1 from "../img/mainNyoung.png"

const ProjectWrap=styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 0;
`
const Black=styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.65);
opacity: 0;
`
const ProjectBox=styled.div`
max-width: 390px;
width: 100%;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.3);
/* border-radius: 20px; */
position: relative;
${Black}:hover {
    opacity: 0.8;
    cursor: pointer;
    top: 50;
  }
  @media screen and (max-width: 405px) {
    max-width: 350px;
    width: 100%;

  }
`
const ImgBox=styled.div`
width: 100%;
height: 200px;
/* border: 1px yellow solid; */
`
const Img =styled.img`
width:100%;
height:100%;
`
const Hh=styled.div`
width:100%;
height:50px;
background-color: #93BFCF;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 8px;
`
const Title=styled.div`
font-size: 18px;
font-weight: 800;
`
const Text=styled.div`
font-size:${props => props.font_size ||'15px'};
color:${props => props.color};
font-weight:${props => props.font_weight };
`
const SkillBox=styled.div`
width: ${props => props.width ||'56px'};
height: 18px;
background-color: #1E74C7;
border-radius: 14px;
display: flex;
align-items: center;
justify-content: center;
padding:4px;
`
const Wrap=styled.div`
display: flex;
flex-wrap: wrap;
gap:15px;
@media screen and (max-width: 405px) {
   gap:20px;
  }
`
const Bot=styled.div`
padding: 4px;
height: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Span=styled.span`
font-size: 18px;
color: gray;
font-weight: 700;
@media screen and (max-width: 670px) {
    font-size: 15px;
  }
  @media screen and (max-width: 440px) {
    font-size: 12px;
  }
`
const Hover=styled.div`
opacity: 1;
width: 80%;
height: 80%;
border: 1px white solid;
font-size: 22px;
font-weight: 800;
color: white;
display: flex;
align-items: center;
justify-content: center;
`
const SkillWrap=styled.div`
display: flex;

`
function Projects(){
    const [openModal, setCloseModal] = useState(false);
    const [openModal2,setCloseModal2] =useState(false);
    const [openModal3,setCloseModal3] =useState(false);
    const [openModal4,setCloseModal4] =useState(false);

    const HandleModal = () => {
        setCloseModal(true);
    };
    const HandleModal2 = () => {
        setCloseModal2(true);
    };
    const HandleModal3 = () => {
        setCloseModal3(true);
    };
    const HandleModal4 = () => {
        setCloseModal4(true);
    };
    return(
        <ProjectWrap>
            <Span>📌 프로젝트를 클릭하시면 더 자세한 정보를 볼 수 있습니다.</Span>
            <Wrap>
            <ProjectBox onClick={HandleModal}>
                <ImgBox>
                    <Img src={Img1}></Img>
                </ImgBox>
                <Hh>
                    <Text font_size={"18px"} color={"white"} font_weight={"700"}>개인 프로젝트</Text>
                </Hh>
                <Bot>
                    <Title>💡 포트폴리오</Title>
                    <Text>개인 포트폴리오 웹 사이트 입니다</Text>
                    <Title>🔨 사용스택</Title>
                    <SkillWrap>
                        <SkillBox>
                            <Text color={"white"}>React</Text>
                        </SkillBox>
                        <SkillBox width={"72px"}>
                            <Text color={"white"}>Firebase</Text>
                        </SkillBox>
                        <SkillBox width={"140px"}>
                            <Text color={"white"}>Styledcomponent</Text>
                        </SkillBox>
                    </SkillWrap>
                </Bot>
                <Black>
                    <Hover>
                    클릭해서 자세히 보기
                    </Hover>
                </Black>
            </ProjectBox>
            <ProjectBox>
                <ImgBox>
                    <Img src={Img1}></Img>
                </ImgBox>
                <Hh>
                    <Text font_size={"18px"} color={"white"} font_weight={"700"}>개인 프로젝트</Text>
                </Hh>
                <Bot>
                    <Title>💡 프로젝트 타이쿤</Title>
                    <Text>팀원을 꾸려 프로젝트를 개설 할 수 있는 사이트 입니다.</Text>
                    <Title>🔨 사용스택</Title>
                    <SkillWrap>
                        <SkillBox>
                            <Text color={"white"}>React</Text>
                        </SkillBox>
                        <SkillBox width={"72px"}>
                            <Text color={"white"}>Firebase</Text>
                        </SkillBox>
                        <SkillBox width={"140px"}>
                            <Text color={"white"}>Styledcomponent</Text>
                        </SkillBox>
                    </SkillWrap>
                </Bot>
                <Black>
                    <Hover>
                    클릭해서 자세히 보기
                    </Hover>
                </Black>
            </ProjectBox>
            <ProjectBox onClick={HandleModal3}>
                <ImgBox>
                    <Img src={nyoung1}></Img>
                </ImgBox>
                <Hh>
                    <Text font_size={"18px"} color={"white"} font_weight={"700"}>개인 프로젝트</Text>
                </Hh>
                <Bot>
                    <Title>💡 N-Young 쇼핑몰</Title>
                    <Text>즐겨찾는 의류상품을 한눈에 볼 수 있는 나만의 쇼핑몰 입니다.</Text>
                    <Title>🔨 사용스택</Title>
                    <SkillWrap>
                        <SkillBox>
                            <Text color={"white"}>React</Text>
                        </SkillBox>
                        <SkillBox width={"72px"}>
                            <Text color={"white"}>Axios</Text>
                        </SkillBox>
                        <SkillBox width={"140px"}>
                            <Text color={"white"}>LocalStorege</Text>
                        </SkillBox>
                    </SkillWrap>
                </Bot>
                <Black>
                    <Hover>
                    클릭해서 자세히 보기
                    </Hover>
                </Black>
            </ProjectBox>
            <ProjectBox onClick={HandleModal2}>
                <ImgBox>
                    <Img src={Img4}></Img>
                </ImgBox>
                <Hh>
                    <Text font_size={"18px"} color={"white"} font_weight={"700"}>팀 프로젝트</Text>
                </Hh>
                <Bot>
                    <Title>💡 스택오버플로우</Title>
                    <Text>커뮤니티 기반의 웹 사이트 "스택오버플로우" 클론코딩 한 프로젝트 입니다.</Text>
                    <Title>🔨 사용스택</Title>
                    <SkillWrap>
                        <SkillBox>
                            <Text color={"white"}>React</Text>
                        </SkillBox>
                        <SkillBox width={"72px"}>
                            <Text color={"white"}>TailWind</Text>
                        </SkillBox>
                        <SkillBox width={"140px"}>
                            <Text color={"white"}>Zustand</Text>
                        </SkillBox>
                    </SkillWrap>
                </Bot>
                <Black>
                    <Hover>
                    클릭해서 자세히 보기
                    </Hover>
                </Black>
            </ProjectBox>
            {
             openModal && <ProjectModal setCloseModal={setCloseModal} />
            }
            {
             openModal2 && <ProjectModal2 setCloseModal2={setCloseModal2}></ProjectModal2>
            }
            {
             openModal3 && <ProjectModal3 setCloseModal3={setCloseModal3}></ProjectModal3>
            }
            {/* {
             openModal4 && <ProjectModal4 setCloseModal4={setCloseModal4}></ProjectModal2>
            } */}
            </Wrap>
            
        </ProjectWrap>
    )
}
export default Projects;