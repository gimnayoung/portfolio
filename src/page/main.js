import { useEffect, useRef, useState } from 'react';

import Kimnayoung from "../img/Kimnayoung.png"
import PortFolio from '../img/portfolio.png'

import { styled } from 'styled-components'
import Typing1 from "../components/typing1"
import Typing2 from "../components/typing2"
import Test from '../components/test';
import MainImg from "../img/mainimg.jpg"
import ToggleLayout from '../components/toggleLayout';
import Button from '../components/button';
import Header from '../components/header';

import '../App.css'

let MainWrap=styled.div`
border: 1px red solid;
max-width:1400px;
margin: 0 auto;
` 
let MainCont=styled.div`

`
let KimnayoungImg=styled.img`
 height : 60px;
 max-width: 500px;
`
let PortFolioImg=styled.img`
 height : 60px;
 max-width: 500px;
`
let MainCard=styled.div`
max-width:900px;
border: 1px blue solid;
margin: 0 auto;
display: flex;
justify-content: space-around;
align-items: center;
`
let Left=styled.div`
font-size:25px;
`
let Right=styled.div`
width: 190px;
height: 200px;
`
let MainImgBox =styled.img`
object-fit: cover;
border-radius: 70%;
width:100%;
`
let GrayFont=styled.div`
color: rgb(82, 82, 82);
font-weight: 700;
font-size: 23px;
`
let BlackFont=styled.div`
font-weight: 700;
`

function Main(){
    const [count,setCount]=useState(1);
    useEffect(()=>{
        typingHandling();
    },[])
    const [typing,setTyping]=useState(false);

    const typingHandling=()=>{
    /* setTyping(typing=>!typing)*/
    }
    const span=useRef();
    return(
        <>
        <ToggleLayout>
            <MainWrap>
                {/* <KimnayoungImg src={Kimnayoung} className="knyImg"></KimnayoungImg> */}
                <MainCont>
                    <MainCard>
                        <Left>
                            <GrayFont>안녕하세요 </GrayFont>
                            <BlackFont>프론트엔드<span>를</span></BlackFont>
                            {/* {
                                typing===false? <Typing1/> : <Typing2/>
                            } */}
                            {/* <Typing2/> */}
                            {/* {<Test/>} */}
                            <BlackFont>주니어 개발자 김나영입니다.</BlackFont>
                            <div></div>
                        </Left>
                        <Right>
                            <MainImgBox src={MainImg}></MainImgBox>
                        </Right>
                    </MainCard>
                </MainCont>
                {/* <PortFolioImg src={PortFolio}></PortFolioImg> */}
                <Button/>
            </MainWrap>
            </ToggleLayout>
        </>
    )
}

export default Main;


// setText(text-text.slice(0.[count]))
//             setCount(count-1);

// setText('');
//             setCount(0);