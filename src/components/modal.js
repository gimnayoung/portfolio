import { styled } from "styled-components";

const ModalWrap=styled.div`
margin: 0 auto;
width: 500px;
height: 700px;
max-height: 100%;
 position: absolute;
  top: 50%;
  /* left: 50%; */
  margin: 0 auto;
`
const Wrap=styled.div`
width: 500px;
height: 700;
max-width: 100%;
background-color: red;
`
function Modal(){
    return(
       <ModalWrap>
        <Wrap>
            안녕 나는 모달
        </Wrap>
       </ModalWrap>
    )
}
export default Modal;