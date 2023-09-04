import { styled } from "styled-components"
import Img1 from "../img/projectImg.png"

const ProjectWrap=styled.div`
max-width: 1200px;
/* border: 1px red solid; */
margin: 0 auto;
padding: 0;
`
const ProjectBox=styled.div`
max-width: 400px;
width: 100%;
border: 3px green solid;
/* border-radius: 20px; */
`
const ImgBox=styled.div`
width: 100%;
height: 200px;
border: 1px yellow solid;
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
background-color: greenyellow;
border-radius: 14px;
display: flex;
align-items: center;
justify-content: center;
padding:4px;
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
`

function Projects(){
    return(
        <ProjectWrap>
            <Span>프로젝트를 클릭하시면 더 자세한 정보를 볼 수 있습니다.</Span>
            <ProjectBox>
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
                    <SkillBox>
                        <Text>react</Text>
                    </SkillBox>
                </Bot>
            </ProjectBox>
        </ProjectWrap>
    )
}
export default Projects;