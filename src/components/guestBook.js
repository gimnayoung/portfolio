import { styled } from "styled-components";
import { useEffect, useState } from "react";

// import {db} from '../firebase/firebase-config'
// import {collection,getDocs} from "firebase/firestore"

//이름을 Board & Book
const GuestBookWrap=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
max-width:395px;
width:100%;
background-color:white;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const UserSay=styled.div`
padding: 8px;
max-width:285px;
width: 100%;
max-height: 105px;
height: 100%;
border-radius: 22px;
margin-bottom: 16px;
background-color: ${props => props.background_color || '#93BFCF'};
`
const Title=styled.div`
font-size: 22px;
font-weight: bold;
`
const RefreshBut=styled.button`
width:30px;
height:30px;
border-radius: 50%;
/* float: right; */
`
const UserSayBox=styled.div`
/* border: 1px red solid; */
max-width:350px;
width: 100%;
height: 400px;
overflow-y: scroll;
padding: 12px;
 display: flex;
 flex-direction: column;
 align-items: center;
`
const UserName=styled.div`
font-size:13px;
font-weight: 800;
padding: 4px;
`
const UserTitle=styled.div`
font-size: 14px;
color: ${props => props.color || 'gray'};
font-weight: 800;
padding: 4px 4px 2px 4px;
`
const UserMessage=styled.div`
font-size:14px;
color:gray;
padding: 2px 4px 4px 4px;
line-height:17px;
`
const New=styled.span`
font-size:12px;
color:gray;
`

function GuestBook(props){
    // const id = 1;
    // const usersCollectionRef =collection(db,"users");

    // const [users,setUsers]=useState([]);
    
    //DB데이터 가져옴
    // useEffect(()=>{
    //     const getUsers= async()=>{
    //         const data = await getDocs(usersCollectionRef);
    //         setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    //         console.log(users)
    //     }
    //     getUsers();
    //     //console.log("안녕")
    // },[])
    // const getRandomIndex=()=>{
    //     const length = color.length;
    //     const RandomColor=parseInt(Math.random() * length);
    //     return RandomColor
    // }
     const [color,setColor]=useState(['#93BFCF','#BDCDD6',"#EEE9DA"])
   
    return(
        <GuestBookWrap>
            <Title>Guest Book 📝</Title>
            <UserSayBox>
                {/* <New>새로고침을 눌러주세요.</New> 
                <RefreshBut><IoIosRefresh size={20}/></RefreshBut> */}
                 {
                    props.users.map((list,index)=>
                    (
                        <UserSay background_color={'#93BFCF'} key={list.id}>
                            {
                                list.count%2===1 ? (
                                <>
                                 <UserTitle color="white">비밀 글 입니다. </UserTitle>
                                </>) : (
                                <>
                                <UserName>{list.name}</UserName>
                                <UserTitle>{list.title}</UserTitle>
                                <UserMessage>{list.message}</UserMessage>
                                </>)
                            }
                        </UserSay>
                    )
                )}
                {/* <UserSay background_color={"#EEE9DA"}>Test</UserSay>
                <UserSay >Test</UserSay>
                <UserSay background_color={"#BDCDD6"}>Test</UserSay>
                <UserSay background_color={"#EEE9DA"}>Test</UserSay>  */}
            </UserSayBox>
        </GuestBookWrap>
    )
}
export default GuestBook;