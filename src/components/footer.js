//애니메이션 돌아가는거 천천히
//more버튼 수정
import { styled } from 'styled-components'
import '../App.css'
import Img1 from "../img/Kimnayoung.png"
import Img2 from "../img/portfolio.png"

let FooterWrap =styled.div`
box-sizing: border-box;
padding: 12px;
    width: 100%;
    height: 120px;
    background-color: gray;
    display: flex;
    
`
let Img =styled.img`
/* max-width:530px; */
width: 48%;
height: 43px;
/* border: 1px red solid; */
`
const ImgBox=styled.div`
opacity: 0.3;
display: flex;
justify-content: space-between;
`
const Box=styled.div`
float: right;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 45px;
`
const Wrap=styled.div`
width: 1100px;
margin: 0 auto;
`
const Alarm=styled.div`
font-size:12px;
color :pink;
`
const Font=styled.div`
font-size:14px;
color:white`
function Footer(){
    return(
            <FooterWrap>
                <Wrap>
                    <ImgBox>
                        <Img src={Img1}></Img>
                        <Img src={Img2}></Img>
                    </ImgBox>
                    <Box>
                        <Alarm>📍 사이트에 안에 모든 이미지는 저작권이 없는 이미지 입니다.</Alarm>
                        <Font> 💙 Created in 08 2023 。by Nayoung Kim </Font>
                    </Box>
                </Wrap>
            </FooterWrap>
    )
}

export default Footer;