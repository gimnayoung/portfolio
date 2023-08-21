import { styled } from 'styled-components';
import AboutImg from '../img/aboutimg.jpg'

import {BsFillPersonFill} from 'react-icons/bs'
import {LiaBirthdayCakeSolid} from "react-icons/lia"
import {HiOutlineHome} from "react-icons/hi"
import {FiPhoneCall} from "react-icons/fi"
import {HiOutlineMail} from 'react-icons/hi'
import {BsGithub} from 'react-icons/bs'

let AboutWrap=styled.div`
margin: 0 auto;
max-width: 1300px;
display: flex;

`
let ImgWrap=styled.div`
max-width: 300px;
`
let Img= styled.img`
max-width: 100%;
border-radius: 47%;
`
let Wrap=styled.div`
padding:8px;
width: 1100px;
margin: 0 auto;
background-color: white;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

let Box=styled.div`
margin-right:4px;
padding: 4px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 200px;
height: 120px;
background-color: white;
border: 1px gray solid;
border-radius:5px;
`
let IconWrap=styled.div`
/* width: 650px; */
display: flex;
/* border: 1px red solid; */
flex-direction: column;
justify-content: space-evenly;
`
let Bottom= styled.div`
display: flex;
`
let Top = styled.div`
display: flex;
justify-content: space-between;
`
let Icon =styled.div`
background-color:#1E74C7;
border-radius: 50%;
width: 84px;
height: 74px;
display:flex;
align-items: center;
justify-content:center;
color:white;
`
let Font=styled.div`
font-weight: 800;
color:gray;
`
let Title =styled.h1`
width: 150px;
font-size: 20px;
font-weight: 800;
margin: 0 auto;
`
let Contents=styled.div`
display: flex;
justify-content: space-around;
`
function About(){
    return(
        <AboutWrap>
            
            <Wrap>
                <Title>💌 About me!</Title>
                <Contents>
                    <ImgWrap>
                        <Img src={AboutImg}></Img>
                    </ImgWrap>
                    <IconWrap>
                        <Top>
                            <Box>
                                <Icon>
                                    <BsFillPersonFill size={'35px'}></BsFillPersonFill>
                                </Icon>
                                <Font>김나영</Font>
                            </Box>
                            <Box>
                                <Icon>
                                    <LiaBirthdayCakeSolid size={'35px'}/>
                                </Icon>   
                                <Font>1999.10.26</Font>
                            </Box>
                            <Box>
                                <Icon>
                                    <HiOutlineHome size={'35px'}/>
                                </Icon> 
                                <Font>서울시 은평구</Font>
                            </Box>
                        </Top>
                        <Bottom>
                            <Box>
                                <Icon>
                                    <FiPhoneCall size={'35px'}/>
                                </Icon> 
                                <Font>010.9961.5320</Font>
                            </Box>
                            <Box>
                                <Icon>
                                    <BsGithub size={'35px'}/> 
                                </Icon>   
                                <Font>gimnayoung</Font>
                            </Box>
                            <Box>
                                <Icon>
                                    <BsGithub size={'35px'}/>   
                                </Icon> 
                                <Font>gimnayoung</Font>
                            </Box>
                        </Bottom>
                    </IconWrap>
                </Contents>
            </Wrap>
        </AboutWrap>
    )
}
export default About;