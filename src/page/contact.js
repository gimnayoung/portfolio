import { styled } from "styled-components";
import ThanksImg from "../img/sendMessage3.jpg"
import { useState } from "react";
const ContactWrap=styled.div`
margin: 0 auto;
padding: 0;
max-width: 1200px;
box-sizing: border-box;
border: 1px red solid;
display: flex;
/* flex-direction: column; */
justify-content: space-around;
`
const CardBox=styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 500px;
height: 550px;
width: 100%;
/* border: 1px red solid; */
background-color: white;
justify-content: space-around;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const ContactImg=styled.img`
width:400px;
height: 250px;
`
const Title=styled.h3`
font-size: 22px;
font-weight: bold;
`
const UserInputBox=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
max-width: 500px;
height: 550px;
width: 100%;
/* border: 1px red solid; */
`
const UserInput=styled.input`
width: 450px;
height: ${props => props.height || '44px'};
`
const SendBut=styled.button`
width: 450px;
height:40px;
background: #1E74C7;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`
function Contact(){
    // const [userName,setUSerName]=useState;
    return(
        <ContactWrap>
            <CardBox>
                <Title>Contact Me 💌</Title>
                <div>- 하고 싶은 피드백 혹은 메세지를 남겨주세요.</div>
                <div>감사합니다 : )</div>
                <ContactImg src={ThanksImg}></ContactImg>
            </CardBox>
            <UserInputBox>
                <UserInput placeholder="Name"></UserInput>
                <UserInput placeholder="Title"></UserInput>
                <UserInput placeholder="Message" height={"335px"}></UserInput>
                <SendBut>Send</SendBut>
            </UserInputBox>
        </ContactWrap>
    )
}
export  default Contact;