import { styled } from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import { VscChromeMinimize } from "react-icons/vsc";
import { useState } from "react";

const ModalWrap = styled.div`
  /* box-sizing: border-box;
  border: 1px green solid;
  margin: 0 auto;
  width: 20%;
  min-width: 280px;
  height: 45%;
  position: fixed;
  top: 25%;
  left: 40%;
  margin: 0 auto;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px; */
  
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  z-index: 200;
  box-sizing: border-box;
  margin: 0 auto;
  width: 30%;
  height: 45%;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  background-color: white;
  border-radius: 14px;
  /* padding: 12px; */
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  @media screen and (max-width: 1010px) {
    width: 300px;
   height: 250px;
  }
`;
const Wrap = styled.div``;
const Header = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 4px;
`;
const IconBox = styled.div`
  /* width: 45px;
  border: 1px red solid;
  display: flex;
  justify-content: space-around; */

  /* padding: 4px; */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: right;
  /* height: 45px; */
  width: 100%;
  cursor: pointer;
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
const Contents = styled.div`
  /* border: 1px red solid; */
  padding: 4px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: orange;
`;
function Modal(props) {
  const closeModal = () => {
    props.setOffModal(false);
  };
  return (
    <ModalWrap>
      <Wrap>
        <Header>
          <IconBox onClick={closeModal}>
            <RiCloseFill size={20}></RiCloseFill>
          </IconBox>
        </Header>
        <Contents>
          <Title></Title>
          <div>
            {/* 나는 이런사람 입니다 평소에 웹/앱을 구경할때 다양한 기능들을 어떻게
            구현하는지 궁금증을 가집니다 */}
            {/* 다이어리에 기록하고 계획하는 걸 좋아합니다 더 섬세하고 꼼꼼하게 일을 진행할 수 있습니다 */}
          </div>
          <Title></Title>
          <div>{/* 끊임없이 배우려는 자세와 새로운 도전을  수용하려고하는 자세를 가지려고 노력합니다*/}</div>
        </Contents>
      </Wrap>
    </ModalWrap>
  );
}
export default Modal;
