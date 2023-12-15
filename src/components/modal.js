import { styled } from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import { VscChromeMinimize } from "react-icons/vsc";
import { useState } from "react";

const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  z-index: 200;
  box-sizing: border-box;
  margin: 0 auto;
  width: 30%;
  height: 35%;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  background-color: white;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  @media screen and (max-width: 1010px) {
    width: 300px;
   height: 230px;
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
  width: 150px;
  height: 17px;
  background-color: white;
  border-radius: 4px 4px 0 0;
`;
const Contents = styled.div`
  padding: 4px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
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
          <Title>💙웹 사이트/서비스를 이용할 때 다양한 기능을 어떻게 구현하는지에 대한 궁금증을 가지고 공부하려 노력합니다.</Title><br></br>
          <Title>💙풀리지 않는 코드나 에러가 있다면 서치나 팀원간의 소통을 하며 공유하여 하나씩 풀어나가는 과정을 즐깁니다. </Title><br></br>
          <Title>💙팀원 혹은 동료들에게 피드백을 받으며 배워가는것을 좋아합니다. </Title><br></br>
        </Contents>
      </Wrap>
    </ModalWrap>
  );
}
export default Modal;
