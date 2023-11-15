import { styled } from "styled-components";
const Font=styled.div`
font-size: 40px;
font-weight: 700;
padding: 30px 0;
`
const Font2 =styled.div`
font-size: ${(props) => props.font_size || "24px;"};
font-weight: ${(props) => props.font_weight || "700;"};
padding: 4px 0;
`
const Wrap=styled.div`
border-top: 3px #93BFCF dashed;
margin-top: 80px;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
`
const MainWrap=styled.div`
padding: 20px 0;
`
const Box=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 12px;
`
const SmallBox=styled.div`
width:65%;
`
function Main3() {
  return <Wrap>
    <MainWrap>
      <Font>EDUCATION</Font>
      <Box>
        <div>
          <Font2>코리아IT 아카데미(오프라인)</Font2>
          <Font2 font_size={'20px'}>2023.04.10 - 2023.07.14</Font2>
        </div>
        <SmallBox>
          <Font2  font_size={'14px'} font_weight={'600'}>주 5회 5시간씩 교육을 들으며, HTML,CSS,JavaScript,React 기초 역량을 다시 수업하며 공부하는데 도움이 됐습니다.</Font2>
          <Font2  font_size={'14px'} font_weight={'600'}>솔로 프로젝트 "n-young"쇼핑몰 사이트를 제작하였습니다.</Font2>
          <Font2  font_size={'14px'} font_weight={'600'}>팀 프로젝트 "projecttycoon" 사이트를 코리아it 아카데미 백엔드 수강생들과 함께 수료 이후 제작한 경험이 있습니다.</Font2>
        </SmallBox>
      </Box>
      <Box>
        <div>
          <Font2>코드스테이츠(온라인)</Font2>
          <Font2 font_size={'20px'}>2022.10.20 - 2023.04.10</Font2>
        </div>
        <SmallBox>
          <Font2  font_size={'14px'} font_weight={'600'}>주 5회 8시간씩 온라인 교육을 들으며, HTML,CSS,JavaScript,React 바탕으로 자기주도학습을 길렀습니다.</Font2>
          <Font2  font_size={'14px'} font_weight={'600'}>팀으로 협업할때 사용되는 GitHub,Figma등 다양한 협업 툴을 익히며 공부하는데 도움이 됐습니다.</Font2>
          <Font2  font_size={'14px'} font_weight={'600'}>팀 프로젝트 "스택오브플로우" 사이트를 클론하여 백엔드와 협업해 프로젝트를 진행시킨 경험이 있습니다.</Font2>
        </SmallBox>
      </Box>
    </MainWrap>
  </Wrap>;
}
export default Main3;
