export default function Time(){
   

    // time
    const date = new Date().toDateString();
    const time = new Date().toTimeString();
    
    return(
        <><h1>TODAY: {date}</h1>
            <h1 >Current Time: {time}</h1>
        </>
    );

}