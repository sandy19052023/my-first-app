
import axios from "axios";
import { useState } from "react";
import View from "./view";

export default function Axios()
{
function Submit(a)
{
a.preventDefault();
}

const [name,setname]=useState("");
const cl=()=>
{
    axios.post("http://localhost:199/",{name:name})
    setname('');
    }

    return(
    <div className="container-fluid" >
    <form className="form" onSubmit={Submit}>
     <input type="text" placeholder="ENTER YOU NAME" value={name} onChange={(ch)=>setname(ch.target.value)}></input>
     <button className="btn btn-info" onClick={cl} >SUBMIT</button>
    
     <View/>

    </form>
    </div>

    );
}