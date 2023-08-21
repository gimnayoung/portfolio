import { styled } from 'styled-components'

let MoreBut=styled.button`
background:#1E74C7;
    color:#fff;
    border:none;
    position:relative;
    height:60px;
    font-size:1.6em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;

`
let ButWrap=styled.div`
position: fixed;
z-index: 999999;
bottom: 4%;
right: 45%;
`
// html,body{
//     height:100%;
//   }
//   body{
//     text-align:center;
//   }
//   body:before{
//     content:'';
//     height:100%;
//     display:inline-block;
//     vertical-align:middle;
//   }
//   button:hover{
//     background:#fff;
//     color:#1AAB8A;
//   }
//   button:before,button:after{
//     content:'';
//     position:absolute;
//     top:0;
//     right:0;
//     height:2px;
//     width:0;
//     background: #1AAB8A;
//     transition:400ms ease all;
//   }
//   button:after{
//     right:inherit;
//     top:inherit;
//     left:0;
//     bottom:0;
//   }
//   button:hover:before,button:hover:after{
//     width:100%;
//     transition:800ms ease all;
//   }
  

function Button(){
    return(
        <ButWrap>
         <MoreBut>More</MoreBut>
        </ButWrap>
    )
}

export default Button