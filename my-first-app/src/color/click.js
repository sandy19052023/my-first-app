import { useState } from "react";


export default function Click(){
    
   
  
    //   const [color,setColor]=useState('red')
    //   const change=()=>{
    //     setColor('green')
    //   }
    //   const blue=()=>{
    //     setColor("blue")
    //   }
    //   const yellow=()=>{
    //     setColor("yellow")
    //   }
    //   const orange=()=>{
    //     setColor("orange")
    //   }
    const [img,setImg]=useState("")
    
    return(
        <>
        
        {/* <h1 style={{backgroundColor:color}}>SANDEEP_RAJ_R</h1>
        
       <button  onClick={change}>GREEN</button>
       <button  onClick={blue}>BLUE</button>
       <button  onClick={yellow}>YELLOW</button>
       <button  onClick={orange}>ORANGE</button> */}
       <div className="center">
       <h1>{img}</h1>
       <button  onClick={ ()=>{
      setImg(<img src="https://assets.gqindia.com/photos/6254110f5f4f4f56d4a3d7d2/4:3/w_1440,h_1080,c_limit/Yash%20to%20Ram%20Charan%20These%20are%20the%2011%20highest-paid%20South%20Indian%20actors.jpg" alt="Yash"></img> )
    }} >Yash</button>
<button onClick={()=>{
        setImg(<img src="https://m.media-amazon.com/images/M/MV5BZWJlODhlMzctOTU0Yi00MTUwLTkxODYtMDNjNTQxYTI2YTE1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY256_CR20,0,172,256_AL_.jpg" accessKey="Vijay"></img>)
    }}>Vijay</button>

       <button onClick={()=>{setImg(<img src="https://www.scrolldroll.com/wp-content/uploads/2021/09/Dhanush-best-south-indian-actors-scaled.jpg" alt="Dhanush"></img>)}} >Dhanush</button>

       <button  onClick={ ()=>{
      setImg(<img src="https://www.behindwoods.com/tamil-movies-cinema-news-16/images/rajinikanth-talks-about-how-he-became-a-hero-in-tamil-cinema-photos-pictures-stills.jpg" alt="Rajinikanth "></img> )
    }} >Rajinikanth </button>

    <button  onClick={ ()=>{
      setImg(<img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-56970,resizemode-1,msid-96218293/news/new-updates/vijay-sethupathis-drastic-weight-loss-stuns-fans-see-pics.jpg" alt="Sethupathi"></img> )
    }} >Sethupathi</button>
    </div>
        </>
    );

}