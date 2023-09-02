import { styled } from "styled-components";
import { useEffect, useState } from "react";

import GuestBook from"../components/guestBook"
import ThanksImg from "../img/sendMessage3.jpg"
import {db} from '../firebase/firebase-config'
import {collection,getDocs,addDoc } from "firebase/firestore"
// import { firestore } from "../firebase/firebase-config"; 1

const ContactWrap=styled.div`
margin: 0 auto;
padding: 0;
max-width: 1400px;
box-sizing: border-box;
/* border: 1px red solid; */
display: flex;
/* flex-direction: column; */
justify-content: space-around;
`
const CardBox=styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 440px;
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
max-width: 370px;
height: 550px;
width: 100%;
/* border: 1px red solid; */
`
const UserInput=styled.input`
width: 100%;
height: ${props => props.height || '44px'};
`
const SendBut=styled.button`
width: 380px;
height:40px;
background: #1E74C7;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`
const GuestWrap=styled.div`
`
function Contact(props){
    //DB데이터 가져옴
    useEffect(()=>{
        const getUsers= async()=>{
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        }
        getUsers();
        //console.log("안녕")
    },[])
    // useEffect(()=>{
    //     setUserId(userid=userid+1); 
    // },[submitUserData()])

    const [users,setUsers]=useState([]);
    const [userid,setUserId]=useState(1);
    const [userName,setUserName]=useState('');
    const [userTitle,setUserTitle]=useState('');
    const [userMessage,setUserMessage]=useState('');
    const usersCollectionRef =collection(db,"users");

    //event 핸들러
    const nameHandler=(e)=>{
        setUserName(e.target.value);
    }
    const titleHandler=(e)=>{
        setUserTitle(e.target.value);
    }
    const messageHandler=(e)=>{
        setUserMessage(e.target.value);
    }
    //서버에 데이터 보냄
    const submitUserData= async()=>{

        await addDoc(usersCollectionRef, {id:userid , name:userName , title:userTitle, message : userMessage })
        alert('감사합니다.');
    }

    return(
        <>
        <ContactWrap>
            <CardBox>
                <Title>Contact Me 💌</Title>
                <div>- 하고 싶은 피드백 혹은 메세지를 남겨주세요.</div>
                <div>감사합니다 : )</div>
                <ContactImg src={ThanksImg}></ContactImg>
            </CardBox>
            <UserInputBox>
                <UserInput type="text" placeholder="Name" maxLength={5} onChange={nameHandler}></UserInput>
                <UserInput type="text" placeholder="Title" maxLength={13} onChange={titleHandler}></UserInput>
                <UserInput type="text" placeholder="Message" height={"335px"} maxLength={67} onChange={messageHandler}></UserInput>
                <SendBut onClick={()=>{
                    submitUserData();
                }}>
                        Send
                </SendBut>
            </UserInputBox>
            {/* 바뀐내용말고 데이터 담고 꺼내온거 보여줘야함 */}
            <GuestBook users={users}/>
        </ContactWrap>
        </>
    )
}
export  default Contact;