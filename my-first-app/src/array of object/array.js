export default function Arr(){


    const name=[
        {ID:99,name:'sandy',Age:21,lan:[{lan1:"java",lan2:"html",lan3:"CSS",lan4:"PYTHON"}]},
        {ID:55,name:'siva',Age:25,lan:[{lan1:"java",lan2:"html",lan3:"CSS",lan4:"PYTHON"}]},
        {ID:44,name:'tamil',Age:20,lan:[{lan1:"java",lan2:"html",lan3:"CSS",lan4:"PYTHON"}]},
        {ID:32,name:'raja',Age:100,lan:[{lan1:"java",lan2:"html",lan3:"CSS",lan4:"PYTHON"}]}
    ]
    return(
        <>
<table className="table table-bordered bg-info">
    <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>AGE</th>
        <th>KEYSKILL</th>
    </tr>
  {  name.map((a) => 
    <tr>
    <td>{a.ID}</td>  
 <td>{a.name}</td>
 <td>{a.Age}</td>
 <td>
    <tr className="table table-borderer bg-info">
    <th>lan1</th>
    <th>lan2</th>
    <th>lan3</th>
    <th>lan4</th>
    </tr>
    {a.lan.map((s) =>
    <tr>

        <td>{s.lan1}</td>
        <td>{s.lan2}</td>
        <td>{s.lan3}</td>
        <td>{s.lan4}</td>
    </tr>
    )}
 </td>
       </tr>
  )}
</table>
</>
    );
}