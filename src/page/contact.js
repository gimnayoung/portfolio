//id가 바뀌게 하기
//삭제하는 버튼 만들기
//안내말 쓰기
//비밀글 만들기 ?

import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useTheme } from "../store/themeProvider";

import GuestBook from "../components/guestBook";
import ThanksImg from "../img/sendMessage3.jpg";
import { db } from "../firebase/firebase-config";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
// import { firestore } from "../firebase/firebase-config"; 1

const Font = styled.div`
  font-size: ${(props) => props.font_size || "12px"};
  font-weight: 700;
  color: gray;
`;
const ContactWrap = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;
  /* border: 1px red solid; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    gap: 40px 12px;
  }
  /* @media screen and (max-width: 600px) {
    max-width: 250px;
    width: 100%;
  } */
`;
const CardBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 440px;
  height: 550px;
  width: 100%;
  background-color: ${(props) =>
    props.theme === "light" ? "white" : "#525252"};
  justify-content: space-around;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media screen and (max-width: 1100px) {
    max-width: 350px;
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    max-width: 900px;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (max-width: 600px) {
    max-width: 500px;
    width: 100%;
    flex-direction: column;
    height: 500px;
  }
`;
const ContactImg = styled.img`
  max-width: 400px;
  width: 100%;
  height: 250px;
  margin: 4px;
  @media screen and (max-width: 750px) {
    max-width: 250px;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    max-width: 400px;
    width: 100%;
  }
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const UserInputBox = styled.div`
  box-sizing: border-box;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 370px;
  width: 100%;
  height: 550px;
  @media screen and (max-width: 1100px) {
    max-width: 290px;
    width: 100%;
  }
  @media screen and (max-width: 650px) {
    max-width: 400px;
    width: 100%;
  }
`;
const UserInput = styled.input`
  box-sizing: border-box;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "44px"};
`;
const SendBut = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: #1e74c7;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`;
const CheckInput = styled.input`
  width: 20px;
  height: 20px;
  /* border: 1px red solid; */
`;
const CheckBox = styled.div`
  width: 100%;
  /* border: 1px red solid; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CheckBox2 = styled.div`
  width: 70px;
  /* border: 1px red solid; */
  display: flex;
  align-items: center;
`;
const GuestWrap = styled.div``;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 1.7;
  /* inline-size: auto; */
  @media screen and (max-width: 600px) {
    font-size: 14px;
    font-weight: 600;
  }
`;
function Contact() {
  const ThemeMode = useTheme();
  //DB데이터 그냥 불러오기
  // useEffect(()=>{
  //     const getUsers= async()=>{
  //         const data = await getDocs(usersCollectionRef);
  //         setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
  //     }
  //     getUsers();
  // },[])

  //DB데이터 시간 역순불러오기
  useEffect(() => {
    const getUsers = async () => {
      const result = await getDocs(
        query(usersCollectionRef, orderBy("createdAt", "desc"))
      );
      const boards = result.docs.map((el) => el.data());
      setUsers(boards);
    };
    getUsers();
  }, []);

  // useEffect(()=>{
  //     setUserId(users.length)
  //     console.log(userid)
  // },[])
  const [users, setUsers] = useState([]);
  const [userid, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const usersCollectionRef = collection(db, "users");

  const [secret, setSecret] = useState(0);

  //event 핸들러
  const nameHandler = (e) => {
    setUserName(e.target.value);
  };
  const titleHandler = (e) => {
    setUserTitle(e.target.value);
  };
  const messageHandler = (e) => {
    setUserMessage(e.target.value);
  };
  const passwordHandler = (e) => {
    setUserPassword(e.target.value);
  };
  //DB에 유저 데이터 보내기
  const submitUserData = async () => {
    if (userName === "") {
      alert("Name을 작성해주세요.");
      return false;
    }
    if (userTitle === "") {
      alert("Title을 작성해주세요.");
      return false;
    }
    if (userMessage === "") {
      alert("Message를 작성해주세요.");
      return false;
    }
    if (userPassword === "") {
      alert("Password를 작성해주세요.");
      return false;
    }
    await addDoc(usersCollectionRef, {
      createdAt: Date.now(),
      name: userName,
      title: userTitle,
      password: userPassword,
      message: userMessage,
      count: secret,
    });
    alert("감사합니다.");
    window.location.reload();
  };
  return (
    <>
      <ContactWrap>
        <CardBox theme={ThemeMode[0]}>
          <Box>
            <Title>💌 Contact Me</Title>
            <div>- 하고 싶은 피드백 혹은 메세지를 남겨주세요.</div>
            <div>감사합니다 : )</div>
          </Box>
          <ContactImg src={ThanksImg}></ContactImg>
        </CardBox>
        <UserInputBox>
          <UserInput
            type="text"
            placeholder="Name"
            maxLength={5}
            onChange={nameHandler}
          ></UserInput>
          <UserInput
            type="text"
            placeholder="Title"
            maxLength={13}
            onChange={titleHandler}
          ></UserInput>
          <CheckBox>
            <UserInput
              type="password"
              placeholder="password"
              maxLength={4}
              height={"28px"}
              width={"80%"}
              onChange={passwordHandler}
            ></UserInput>
            <CheckBox2>
              <CheckInput
                onClick={() => {
                  setSecret(secret + 1);
                  console.log(secret);
                }}
                type="checkbox"
                for="s"
              />
              <Font id="s">비밀글</Font>
            </CheckBox2>
          </CheckBox>
          <UserInput
            type="text"
            placeholder="Message"
            height={"300px"}
            maxLength={67}
            onChange={messageHandler}
          ></UserInput>
          <SendBut
            onClick={() => {
              submitUserData();
            }}
          >
            Send
          </SendBut>
        </UserInputBox>
        <GuestBook users={users} secret={secret} />
      </ContactWrap>
    </>
  );
}
export default Contact;
