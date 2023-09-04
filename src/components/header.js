import { styled } from 'styled-components'
import '../App.css'

import Logo from "../img/logo.png"
// import { Link, Router } from 'react-router-dom'


let HeaderWrap =styled.div`
    height: 72px;
    margin-bottom: 50px;
`
let Wrap = styled.div`
height: 72px;
align-items: center;
  margin: auto;
  width: 1000px;
  display: flex;
  justify-content: space-between;
`
let LogoImg=styled.img`
  max-width: 100px;
  height: 50px;
`
let NavBox=styled.div`
display: flex;
width:380px;
min-width: 300px;
justify-content: space-between;
font-size: 19px;
font-weight: 700;
`


function Header(){
    return(
        <HeaderWrap>
            <Wrap> 
                <LogoImg src={Logo}></LogoImg>
                <NavBox>
                    <a href='/'>HOME</a>
                    <a href='/about'>ABOUT</a>
                    <a href='/skills'>SKILLS</a>
                    <a href='/projects'>PROJECTS</a>
                    <a href='/contact'>CONTACT</a>
                </NavBox>
                <div>야간모드</div>
            </Wrap>
        </HeaderWrap>
    )
}

export default Header;