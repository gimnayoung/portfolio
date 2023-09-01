import { styled } from "styled-components";
import {IoIosRefresh} from "react-icons/io"

//글자 수 제한둬야함 
//서버 api연결
const GuestBookWrap=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
max-width:400px;
width:100%;
background-color:white;
`
const UserSay=styled.div`
padding: 8px;
max-width:330px;
width: 100%;
height: 110px;
border-radius: 20px;
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
border: 1px red solid;
max-width:390px;
height: 400px;
overflow-y: scroll;
padding: 16px;
 display: flex;
 flex-direction: column;
`
const UserName=styled.div`
font-size:13px;
font-weight: 800;
padding: 4px;
`
const UserTitle=styled.div`
font-size: 14px;
color:gray;
font-weight: 800;
padding: 4px 4px 2px 4px;
`
const UserMessage=styled.div`
font-size:14px;
color:gray;
padding: 2px 4px 4px 4px;
line-height:17px;
`
function GuestBook(){
    return(
        <GuestBookWrap>
            <Title>Guest Book 📝</Title>
            {/* <span>새로고침을 눌러주세요.</span> */}
            {/* <RefreshBut><IoIosRefresh size={20}/></RefreshBut> */}
            <UserSayBox>
                <UserSay>
                    <UserName>김나영</UserName>
                    <UserTitle>제목입니다</UserTitle>
                    <UserMessage>긴글 tset용입니다 긴글 tset용입니다 긴글 tset용입니다 긴글 tset용입니다 긴글 tset용입니다 긴글 tset용입니다 긴글 tset용입니다 긴글 tset용입니다 긴글 tset용입니다 (111)</UserMessage>
                </UserSay>
                <UserSay background_color={"#BDCDD6"}>
                    <UserName>김나영</UserName>
                    <UserTitle>제목도 몇글자인지 알아야합니당 얼마나(20)</UserTitle>
                    <UserMessage>짧은글 test용입니다</UserMessage>
                </UserSay>
                <UserSay background_color={"#EEE9DA"}>Test</UserSay>
                <UserSay >Test</UserSay>
                <UserSay background_color={"#BDCDD6"}>Test</UserSay>
                <UserSay background_color={"#EEE9DA"}>Test</UserSay> 
            </UserSayBox>
        </GuestBookWrap>
    )
}
export default GuestBook;