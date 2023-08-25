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


const SkillWrap=styled.div`
max-width: 1400px;
margin: 0 auto;
border: 1px solid red;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`
const MainTitle=styled.div`
font-size:28px;
font-weight: 800;
`
const SkillBox=styled.div`
max-width: 560px;
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
border: 1px solid red;
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
function Skills(){
    return(
        <SkillWrap>
            <MainTitle>FrontEnd</MainTitle>
            <Top>
                <SkillBox>
                    <Icon>
                        <DiReact size={90} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>React</Title>
                        <div>주로 리액트를 사용하여 프로젝트를 한 경험이 있습니다</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <SiStyledcomponents size={87} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>Styledcomponents</Title>
                        <div>스타일드컴포넌트를 사용하여 프로젝트 제작 경험이 있고,</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <AiFillHtml5 size={83} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>HTML</Title>
                        <div>리액트를 사용하여 프로젝트를 한 경험이 있습니다</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <SiCss3 size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>CSS</Title>
                        <div>리액트를 사용하여 프로젝트를 한 경험이 있습니다</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <BiLogoJavascript size={72} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>JavaScript</Title>
                        <div>리액트를 사용하여 프로젝트를 한 경험이 있습니다</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <SiCss3 size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>?</Title>
                        <div>리액트를 사용하여 프로젝트를 한 경험이 있습니다</div>
                    </TextBox>
                </SkillBox>
            </Top>
            <MainTitle>Etc</MainTitle>
            <Bot>
                <SkillBox>
                    <Icon>
                        <BsGithub size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>Github</Title>
                        <div>리액트를 사용하여 프로젝트를 한 경험이 있습니다</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                <Icon>
                    <SiGithubpages size={79} color="white"/>
                </Icon>
                <TextBox>
                    <Title>GithubPage</Title>
                    <div>리액트를 사용하여 프로젝트를 한 경험이 있습니다</div>
                </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <FaFigma size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>Figma</Title>
                        <div>리액트를 사용하여 프로젝트를 한 경험이 있습니다</div>
                    </TextBox>
                </SkillBox>
                <SkillBox>
                    <Icon>
                        <BsDiscord size={67} color="white"/>
                    </Icon>
                    <TextBox>
                        <Title>Discord</Title>
                        <div>리액트를 사용하여 프로젝트를 한 경험이 있습니다</div>
                    </TextBox>
                </SkillBox>
            </Bot>
        </SkillWrap>
    )
}
export default Skills;