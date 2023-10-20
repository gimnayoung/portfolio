import { styled } from "styled-components";
import Img1 from "../img/projectImg.png"
import Img4 from "../img/stackover.png"
import { useState } from "react";
import Img5 from "../img/StackLogin.png"
import Img6 from "../img/StackLogout.png"
import nyoung1 from "../img/nyoung2.png"
import nyoung2 from "../img/nyoung1.png"
import nyoung3 from "../img/nyoung3.png"

import {AiOutlineCloseSquare} from 'react-icons/ai'
const BlackWrap=styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    width: 100vw;
    height: 100vh;
`
const ModalWrap = styled.div`
display: flex;
flex-direction: column;
transform: translate(-50%, -50%);
z-index: 200;
  box-sizing: border-box;
  border: 1px green solid;
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
const CloseBox=styled.div`
padding: 12px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: right;
/* height: 45px; */
width: 100%;
cursor: pointer;
`
const Left=styled.div`
box-sizing: border-box;
padding: 8px;
width: 35%;
overflow-y: scroll;
@media screen and (max-width: 768px) {
   max-width: 760px;
   width: 100%;
  }
`
const Img =styled.img`
width:100%;
height: 100%;
`
const Right=styled.div`
 border-radius: 14px;
box-sizing: border-box;
padding: 8px;
width: 65%;
overflow-y: scroll;
@media screen and (max-width: 768px) {
   max-width: 760px;
   width: 100%;
  }
`
const ImgWrap=styled.div`
box-sizing: border-box;
padding: 4px;
width: 100%;
height: 170px;
@media screen and (max-width: 768px) {
   height: 230px;
  }
  @media screen and (max-width: 500px) {
   height: 200px;
  }
  @media screen and (max-width: 400px) {
   height: 150px;
  }
`
const ContentBox=styled.div`
display: flex;
overflow: hidden;
@media screen and (max-width: 768px) {
   flex-wrap: wrap;
   overflow-y: scroll;
  }
`
const FontBox=styled.div`
margin-bottom: 24px;
display: flex;
flex-direction: column;
`
const Font=styled.div`
line-height:1.3;
padding: 4px;
color:${props => props.color}; ;
font-size:${props => props.fontSize || '20px'};
font-weight: ${props => props.fontWeight || '800'};
`
const SubFont=styled.div`
line-height:1.3;
font-size: 17px;
color: #505050;
padding: 4px;
font-weight: 800;
`
const TitleBox=styled.div`
padding: 4px;
margin-bottom: 20px;
`
const ButBox=styled.div`
box-sizing: border-box;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 4px;
`
const But=styled.div`
border: 1px gray solid;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 30px;
`
const SmallLeft=styled.div`
width: 68%;
display: flex;
justify-content: space-between;
align-items: center;
`
const SmallRight=styled.div`
width: 30%;
display: flex;
flex-direction: column;
align-items: center;
`
const SmallWrap=styled.div`
box-sizing: border-box;
display:flex;
justify-content: space-between;
align-items: center;
margin-bottom: 24px;
margin-top:${props => props.marginTop};
border-bottom:${props => props.borderBottom};
`
const Page=styled.img`
width: 49%;
height: 180px;
background-color: gray;
`
const SkillWrap=styled.div`
display: flex;
flex-wrap: wrap;
gap: 4px;
`
const Skill=styled.div`
background-color: #93BFCF;
color:white;
border-radius:17px;
padding: 12px;
max-width:300px;
`
const A=styled.a`
color:#505050;
padding: 4px;
`
function ProjectModal3(props){
    const HandleCloseModal=()=>{
        props.setCloseModal3(false);
    };
    return(
        <div>
            <BlackWrap onClick={HandleCloseModal}></BlackWrap>
            <ModalWrap>
                <CloseBox onClick={HandleCloseModal}>
                    <AiOutlineCloseSquare size={'30'}/>
                </CloseBox>
                <ContentBox>
                    <Left>
                        <ImgWrap>
                         <Img src={nyoung1}></Img>
                        </ImgWrap>
                        <FontBox>
                            <Font>💡 N-Young 쇼핑몰</Font>
                            <Font fontSize={'15px'} color={'#505050'}>가지각색의 여러 쇼핑몰 사이트 안에서 즐겨찾는 의류 상품들을 모아놓아 이곳 저곳 찾아다닐 필요없이 한 눈에 볼 수 있는 나만의 쇼핑몰 프로젝트 입니다.</Font>
                        </FontBox>
                        <FontBox>
                            <Font>🙋‍♀️ 페이지</Font>
                            <Font fontSize={'15px'} color={'#505050'}>메인 페이지</Font>
                            <Font fontSize={'15px'} color={'#505050'}>상품 디테일 페이지</Font>
                            <Font fontSize={'15px'} color={'#505050'}>마이 페이지</Font>
                        </FontBox>
                        <FontBox>
                            <Font>🔎 바로가기</Font>
                            <A href='https://gimnayoung.github.io/react/#/detail/2' fontSize={'14px'} color={'gray'}>N-Young</A>
                            <A href='https://github.com/codestates-seb/seb42_pre_037' fontSize={'14px'} color={'gray'}>Github</A>
                            <A href='https://www.figma.com/file/tJO0cq3cc7qQpBeRNnbTHh/myStackoverflow?type=design&node-id=0-1&mode=design&t=ucZuc0EI1do7FnEH-0' fontSize={'14px'} color={'gray'}>Figma</A>
                            <A href='https://documenter.getpostman.com/view/24686427/2s93CGSbPy' fontSize={'14px'} color={'gray'}>참고문서</A>
                        </FontBox>
                        <FontBox>
                            <Font>🔨 사용 스킬</Font>
                            <Font fontSize={'15px'} color={'#505050'}>프론트엔드</Font>
                            <SkillWrap>
                                <Skill>React</Skill>
                                <Skill>Axios</Skill>
                                <Skill>LocalStorege</Skill>
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
                        <Font>👉 메인 페이지</Font>
                        <SubFont>-상품더보기 버튼을 클릭하면 Axios를 이용해 상품들을 더 불러 올 수 있습니다.</SubFont>
                        <SmallWrap marginTop={'4px'}>
                            <SmallLeft>
                             <Img src={nyoung1}></Img>
                            </SmallLeft>
                        </SmallWrap>
                        <SmallWrap marginTop={'4px'}>
                            <SmallLeft>
                             <Img src={nyoung3}></Img>
                            </SmallLeft>
                        </SmallWrap>
                        <Font>👉 상품 디테일 페이지</Font>
                        <SubFont>-장바구니 아이콘 버튼을 클릭하면 LocalStorege 안에 저장할 수 있습니다.</SubFont>
                        <SmallWrap borderBottom={'2px gray solid'} marginTop={'8px'}>
                        <SmallWrap marginTop={'4px'}>
                            <SmallLeft>
                             <Img src={nyoung2}></Img>
                            </SmallLeft>
                        </SmallWrap>
                        </SmallWrap>
                        <Font>👉 장바구니 & 찜 페이지</Font>
                        <SubFont>-LocalStorege 안에 장바구니와 최근본 상품들이 저장되어있고, 최근본 상품들은 최신순으로 정렬 했습니다.</SubFont>
                        <SmallWrap marginTop={'4px'}>
                            <SmallLeft>
                             <Img src={nyoung3}></Img>
                            </SmallLeft>
                        </SmallWrap>
                    </Right>
                </ContentBox>
            </ModalWrap>
        </div>
    )
}
export default ProjectModal3;