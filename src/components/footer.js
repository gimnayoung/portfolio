import { styled } from 'styled-components'
import '../App.css'

let FooterWrap =styled.div`
    width: 100%;
    height: 72px;
    background-color: blue;
`
function Footer(){
    return(
        <div>
            <FooterWrap> 
                나는 푸터입니다
            </FooterWrap>
        </div>
    )
}

export default Footer