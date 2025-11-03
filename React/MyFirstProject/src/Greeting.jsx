import {useState} from 'react'

export default function Greeting() {
   
    const [message,setMessage]=useState("Hello Vishal ");
    function changeMessage(){
        setMessage("You Clicked the button");
    }
    return(
        <div>
            <h2>{message}</h2>
            <button onclick={changeMessage}>Click Me</button>
        </div>
    );

}