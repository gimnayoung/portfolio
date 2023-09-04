//순서바꾸기
//내용 채워놓기
//코드 합치기
//css
import { styled } from "styled-components";

import {DiReact} from "react-icons/di"
import {SiStyledcomponents} from "react-icons/si"
import {AiFillHtml5} from "react-icons/ai"
import {SiCss3} from "react-icons/si"
import {BiLogoJavascript} from "react-icons/bi"
import {BsGithub} from 'react-icons/bs'
import {SiGithubpages} from 'react-icons/si'
import {FaFigma} from 'react-icons/fa'
import {BsDiscord} from 'react-icons/bs'
import {BiLogoTailwindCss} from "react-icons/bi"
import {BiLogoFirebase} from "react-icons/bi"


const SkillWrap=styled.div`
max-width: 1400px;
margin: 0 auto;
/* border: 1px solid red; */
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`
const MainTitle=styled.div`
padding: 4px;
margin:12px;
font-size:28px;
font-weight: 800;
`
const SkillBox=styled.div`
max-width: 560px;
min-width: 350px;
width: 100%;
height: 120px;
margin-bottom: 20px;
padding: 12px;
background-color: white;
border: 2px gray solid;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Icon=styled.div`
background-color:#1E74C7;
border-radius: 50%;
min-width: 110px;
min-height: 110px;
display: flex;
align-items: center;
justify-content: center;
`
const Title=styled.div`
font-weight: 700;
font-size: 18px;
`
const TextBox=styled.div`
max-width: 435px;
width: 100%;
/* border: 1px solid red; */
`
const Top=styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`
const Bot=styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`
const Solid = styled.div`
width:100%;
border:1px red solid;
`
function Skills(){
    const FrontSkills=[
        {skill:"React",contents:"몰라용"},
        {skill:"React",contents:"몰라용"},
        {skill:"React",contents:"몰라용"},
        {skill:"React",contents:"몰라용"},
    ]
    return(
        <SkillWrap>
            <MainTitle>🔨 FrontEnd</MainTitle>
            <Top>
                <SkillBox>
                    <Icon>
                        <DiReact size={90} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>React</Title>
                        <div>주로 리액트를 사용하여 프로젝트를 만들고, 꾸준히 공부하고 있습니다.</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <AiFillHtml5 size={83} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>HTML</Title>
                        <div>html 를 사용한 경험이 있습니다.</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <SiCss3 size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>CSS</Title>
                        <div>html, jS , react 등 프로젝트를 진행할때 사용한 경험이있습니다.</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <BiLogoJavascript size={72} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>JavaScript</Title>
                        <div>JS 기반으로하여 리액트와 함께 공부하고있습니다</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <SiStyledcomponents size={87} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>Styledcomponents</Title>
                        <div>스타일드컴포넌트를 사용하여 프로젝트 제작 경험이 있고, 유연하게 다룰 수 있습니다.</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <BiLogoTailwindCss size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>TailWind</Title>
                        <div>테일윈드를 사용하여 프로젝트를 한 경험이 있습니다</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <BiLogoFirebase size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>FireBase</Title>
                        <div>firebase 사용하여 개인프로젝트때 DB를 해결하였습니다</div>
                    </TextBox>
                </SkillBox>
            </Top>
            <Solid></Solid>
            <MainTitle>Etc</MainTitle>
            <Bot>
                <SkillBox>
                    <Icon>
                        <BsGithub size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>Github</Title>
                        <div>깃허브를 이용하여</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                <Icon>
                    <SiGithubpages size={79} color="white"/>
                </Icon>
                <TextBox>
                    <Title>GithubPage</Title>
                    <div>깃허브 페이지를 이용하여 배포를 한 경험이 있습니다.</div>
                </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <FaFigma size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>Figma</Title>
                        <div>피그마를 사용하며 기본레이아웃과 제작한 경험이있습니다. </div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <BsDiscord size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>Discord</Title>
                        <div>디스코드를 통해 온라인으로 팀원들과 소통하며 프로젝트를 제작한 경험이 있습니다.</div>
                    </TextBox>
                </SkillBox>
            </Bot>
        </SkillWrap>
    )
}
export default Skills;