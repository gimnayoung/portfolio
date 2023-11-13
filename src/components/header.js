import { styled } from "styled-components";
import "../App.css";

import Logo from "../img/logo.png";
// import { Link, Router } from 'react-router-dom'
import ToggleLayout from "../components/toggleLayout";

let HeaderWrap = styled.div`
  height: 72px;
  margin-bottom: 50px;
  width: 100%;
`;
let Wrap = styled.div`
  box-sizing: border-box;
  padding: 8px;
  height: 72px;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  /* max-width: 1000px; */
  display: flex;
  justify-content: space-between;
`;
let LogoImg = styled.img`
  max-width: 100px;
  width: 100%;
  height: 50px;
  @media screen and (max-width: 670px) {
    max-width: 80px;
    width: 100%;
    height: 40px;
  }
  @media screen and (max-width: 500px) {
    max-width: 60px;
    width: 100%;
    height: 30px;
  }
`;
let NavBox = styled.div`
  display: flex;
  max-width: 380px;
  width: 100%;
  /* min-width: 300px; */
  justify-content: space-between;
  font-size: 19px;
  font-weight: 700;
  /* border: 1px red solid; */
  @media screen and (max-width: 670px) {
    font-size: 15px;
    max-width: 280px;
  }
  @media screen and (max-width: 500px) {
    font-size: 13px;
    max-width: 200px;
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <Wrap>
        <a href="/">
          <LogoImg src={Logo}></LogoImg>
        </a>
        <NavBox>
          {/* <a href='/'>HOME</a> */}
          {/* <a href='/about'>ABOUT</a> */}
          <a href="/projects">PROJECTS</a>
          <a href="/skills">SKILLS</a>
          <a href="/contact">CONTACT</a>
        </NavBox>
        <ToggleLayout></ToggleLayout>
      </Wrap>
    </HeaderWrap>
  );
}

export default Header;
