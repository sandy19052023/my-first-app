import Page1 from "./page1";
import Page2 from "./page2";

export default function Wholepage()
{
let n=prompt("ENTER THE VLAUE:");
    let array=[];
    for(let i=0;i<=n;i++)
    {
        array.push(i);
        
    }
    return(
        <>
{array}
            

        </>
    )
}