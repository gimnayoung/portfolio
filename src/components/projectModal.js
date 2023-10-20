import { styled } from "styled-components";
import Img1 from "../img/projectImg.png"
import { useState } from "react";

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
  border-radius: 7px;
  /* padding: 12px; */
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
`;
const CloseBox=styled.div`
background-color: red;
height: 45px;
width: 100%;
`
const Left=styled.div`
box-sizing: border-box;
padding: 8px;
width: 35%;
border: 1px blue solid;
overflow-y: scroll;
`
const Img =styled.img`
width:100%;
`
const Right=styled.div`
box-sizing: border-box;
padding: 8px;
width: 65%;
border: 1px blue solid;
overflow-y: scroll;
`
const ImgWrap=styled.div`
box-sizing: border-box;
padding: 4px;
width: 100%;
border: 1px green solid;
`
const ContentBox=styled.div`
display: flex;
overflow: hidden;
`
const FontBox=styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: column;
`
const Font=styled.div`
padding: 4px;
color:${props => props.color}; ;
font-size:${props => props.fontSize || '20px'};
font-weight: ${props => props.fontWeight || '800'};
`
const SubFont=styled.div`
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
width: 49%;
/* border: 1px red solid;s */
display: flex;
flex-direction: column;
align-items: center;
`
const SmallRight=styled.div`
width: 49%;
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
const Page=styled.div`
width: 100%;
height: 180px;
background-color: gray;
`
function ProjectModal(props){
    const HandleCloseModal=()=>{
        props.setCloseModal(false);
    };
    return(
        <div>
            <BlackWrap onClick={HandleCloseModal}></BlackWrap>
            <ModalWrap>
                <CloseBox onClick={HandleCloseModal}>
                    닫기
                </CloseBox>
                <ContentBox>
                    <Left>
                        <ImgWrap>
                         <Img src={Img1}></Img>
                        </ImgWrap>
                        <FontBox>
                            <Font>💡 프로젝트 타이쿤</Font>
                            <Font fontSize={'15px'} color={'#505050'}>코리아IT학원에 다니는 분들이 프로젝트를 개설하기 위해 이용 할 수 있는 사이트 입니다.</Font>
                        </FontBox>
                        <FontBox>
                            <Font>🔎 바로가기</Font>
                            <a href='#' fontSize={'14px'} color={'gray'}>ProjectTycoon</a>
                            <a href='#' fontSize={'14px'} color={'gray'}>깃허브</a>
                        </FontBox>
                        <FontBox>
                            <Font>👨‍👨‍👧‍👧 팀원 정보</Font>
                            <Font fontSize={'15px'} color={'#505050'}>프론트엔드:3명</Font>
                            <Font fontSize={'15px'} color={'#505050'}>백엔드:6명</Font>
                        </FontBox>
                        <FontBox>
                            <Font>🙋‍♀️ 맡은 역할</Font>
                            <Font fontSize={'15px'} color={'#505050'}>랜딩페이지</Font>
                            <Font fontSize={'15px'} color={'#505050'}>프로젝트 개설 페이지</Font>
                            <Font fontSize={'15px'} color={'#505050'}>마이페이지</Font>
                        </FontBox>
                        <FontBox>
                            <Font>🔨 사용 스킬</Font>
                            <Font>프론트엔드</Font>
                            <Font>백엔드</Font>
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
                        <Font>👉 랜딩페이지</Font>
                        <SubFont>-애니메이션 라이브러리를 사용했습니다.</SubFont>
                        <SubFont>-게임형태의 4픽셀 컨셉으로 팀 전체의 색깔을 나타나게하려고 했습니다.</SubFont>
                        <SmallWrap borderBottom={'2px gray solid'} marginTop={'8px'}>
                            <SmallLeft>
                                <Page>사진자리</Page>
                            </SmallLeft>
                            <SmallRight>
                                <Page>사진자리</Page>
                            </SmallRight>
                        </SmallWrap>
                        <Font>👉 프로젝트 개설 페이지</Font>
                        <SubFont>-사용자가 원하는 프로젝트 메인 이미지를 넣을 수 있습니다.</SubFont>
                        <SubFont>-라이브러리를 통해 코드컨벤션,글씨크기,색깔 등을 변경 하여 내용을 작성할 수 있습니다.</SubFont>
                        <SubFont>-프로젝트의 기본 정보를 넣을 수 있습니다.</SubFont>
                        <SmallWrap borderBottom={'2px gray solid'} marginTop={'8px'}>
                            <SmallLeft>
                                <Page>사진자리</Page>
                            </SmallLeft>
                            <SmallRight>
                                <Page>사진자리</Page>
                            </SmallRight>
                        </SmallWrap>
                        <Font>👉 마이 페이지</Font>
                        <SubFont>-사이트 내에서 제공하는 프로필 사진을 정 할 수 있습니다.</SubFont>
                        <SubFont>-사용자의 개인정보들을 변경 할 수 있습니다.</SubFont>
                        <SubFont>-사용자가 게시한 글과 작성한 댓글을 볼 수 있습니다.</SubFont>
                        <SmallWrap borderBottom={'2px gray solid'} marginTop={'8px'}>
                            <SmallLeft>
                                <Page>동영상자리</Page>
                            </SmallLeft>
                            <SmallRight>
                                <Page>동영상자리</Page>
                            </SmallRight>
                        </SmallWrap>
                    </Right>
                </ContentBox>
            </ModalWrap>
        </div>
    )
}
export default ProjectModal;