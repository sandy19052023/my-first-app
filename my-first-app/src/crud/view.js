import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { API } from "./api";

export default function View()
{
    const [view,setView]=useState([]);
useEffect(()=>{axios.get("https://646476e0043c103502ba1eb5.mockapi.io/new").then((b)=>{
setView(b.data)
})
})
   const delet=(s)=>{
    axios.delete(`${API}/${s}`).then(()=>{
        axios.get("https://646476e0043c103502ba1eb5.mockapi.io/new").then((c)=>{
setView(c.data)
    })
})
   }
    return(
        <div className="container-fluid">
<table className="table table-bordered bg-info">
    <tr>
        <th>ID:</th>
<th>NAME:</th>
<th>BUTTON:</th>
    </tr>
    {view.map((a)=>
    <tr>
        <td>{a.id} </td>
        <td>{a.psname}</td>
        <td><button className="btn btn-danger" onClick={()=>delet(a.id)}>DELETE</button></td>
    </tr>)}
    
</table>

        </div>
    );
}