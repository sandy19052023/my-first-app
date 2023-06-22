import axios from "axios";
import { useState } from "react";

export default function Register()
{
    function Submit(a)
{
a.preventDefault();
}
const [name,setname]=useState("");
const[email,setEmail]=useState("");
const[number,setNumber]=useState("");
const[password,setPassword]=useState("");
const[repassword,setRepassword]=useState("");
const cl=()=>
{
    axios.post("http://localhost:199",{name:name,Number:number,email:email,Password:password,Repassword:repassword})
    setname('');
    setEmail('');
    setNumber('');
    setPassword('');
    setRepassword('');
    }
    

//     const el=()=>
// {
//     axios.post("https://646476e0043c103502ba1eb5.mockapi.io/new",{psemail:email})
//     setEmail('');
// }  

const form=document.getElementById('form');
const firstname=document.getElementById('name');
const email1=document.getElementById('email');
const password1=document.getElementById('password');
const password2=document.getElementById('confirmPassword');



function clickfun(){
validateform([firstname,email1,password1,password2,form]);
}

function validateform(inputs)
{
inputs.forEach((input) => {
if(input.value.trim()==="")
{
    alert("please fill the " +input.id);
}
else{
alert("successfully finished");
}
});
}
    return(
        <div className="container-fluid reg">
            <div className="box container ">
                <form className="frm" onSubmit={Submit} id="form">
                    <input type="text"id="name" placeholder="ENTER YOU NAME" className="border-dark form-control "value={name} onChange={(ch)=>setname(ch.target.value)}></input>
                    <input type="email"id="email" placeholder="ENTER YOU Email" className="border-dark form-control mt-4"value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <input type="number" placeholder="ENTER YOU NUMBER"className="border-dark form-control mt-4"value={number} onChange={(n)=>setNumber(n.target.value)}></input>
                    <input type="password" id="password" placeholder="ENTER YOU PASSWORD"className="border-dark form-control mt-4"value={password} onChange={(p)=>setPassword(p.target.value)}></input>
                    <input type="password" id="confirmPassword" placeholder="RE-ENTER YOU PASSWORD"className="border-dark form-control mt-4"value={repassword} onChange={(re)=>setRepassword(re.target.value)}></input>
                    <div class="form-check mt-3"> 
  <input class="form-check-input border-dark " type="radio" name="flexRadioDefault" id="Male" ></input>
  <label class="form-check-label" for="Male">Male</label>
  </div>
  <div class="form-check mt-2">
  <input class="form-check-input border-dark " type="radio" name="flexRadioDefault" id="FeMale" checked></input>
  <label class="form-check-label" for="FeMale">FeMale</label>
  
</div> 
<button className="mt-4 btn btn-primary border-dark  rbt"onClick={cl}  >Register</button>
                </form>
            </div>
           
        </div>
        
    );
        
    
}