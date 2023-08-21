import { useEffect, useState } from "react";


function Typing1(){
    useEffect(()=>{
        const interval = setInterval(()=>{
            setText(text+txt[count]);
            setCount(count+1);
        },200);
        if(count === txt.length){ //반복 중단코드
            // setText(text-txt[count]);
            // setCount(count-1)
            clearInterval(interval)
            console.log(interval)
            console.log(count)//4
            console.log(txt.slice(0,[count]))
            console.log(typeof(interval))
        }//else{ //반복재개
        //     interval=setInterval(()=>{
        //         setText(txt.slice(0,[count]))
        //         setCount(count-1)
        //         console.log(text)
        //         clearInterval(interval)
        //     },200)
        // }
        return ()=> {
            clearInterval(interval);
            // console.log(interval)
        }
    })


    const txt = "좋아하는"
    const [text,setText]=useState('');
    const [count,setCount]=useState(0);
    

    return(
        <>
        <p className="Typing1text">{text}</p>
        </>
    )
}
export default Typing1;