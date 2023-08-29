import { styled } from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import { VscChromeMinimize } from "react-icons/vsc";
import { useState } from "react";

const ModalWrap = styled.div`
  box-sizing: border-box;
  border: 1px green solid;
  margin: 0 auto;
  width: 20%;
  min-width: 280px;
  height: 40%;
  position: fixed;
  top: 25%;
  left: 40%;
  margin: 0 auto;
  background-color: white;
  border-radius: 7px;
  /* padding: 12px; */
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
`;
const Wrap = styled.div``;
const Header = styled.div`
  width: 100%;
  height: 20px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const IconBox = styled.div`
  width: 45px;
  border: 1px red solid;
  display: flex;
  justify-content: space-around;
`;
const State = styled.div`
  box-sizing: border-box;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  /* border: 1px red solid; */
  width: 150px;
  height: 17px;
  background-color: white;
  border-radius: 4px 4px 0 0;
`;
const Contents = styled.div``;
function Modal() {
  return (
    <ModalWrap>
      <Wrap>
        <Header>
          <State>
            <div>내위치</div>
            <RiCloseFill size={15}></RiCloseFill>
          </State>
          <IconBox>
            <VscChromeMinimize></VscChromeMinimize>
            <RiCloseFill size={20}></RiCloseFill>
          </IconBox>
        </Header>
        <Contents>내용</Contents>
      </Wrap>
    </ModalWrap>
  );
}
export default Modal;
