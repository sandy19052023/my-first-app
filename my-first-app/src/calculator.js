import { useState } from "react";

export default function Cal()
{
//     function Seven(){
//     let n = 7;
//   let t= n.toFixed(2)
//   console.log(t);
//     document.getElementById('input').innerText =t;
let [result,setResult]=useState('')
    function display(num)
    {
             setResult(result.concat(num.target.name));
    }
    function c()
    {
        setResult("");
    }
    function clear()
    {
        setResult(result.slice(0,-1));
    }
 function cal(){
    setResult(eval(result));
 }
    
    return(
        // <div class="container-fluid">
            <div class="container main">
            <div class="row">
                <div class="col-12">
<input type="text" id="input" value={result}></input>

                </div>
                </div>
                <div class="row">
                <div class="col-12">
<button className="btn btn-danger" onClick={c}>C</button>
<button class="btn btn-info" name='%' onClick={display}>%</button>
<button class="btn btn-info" name="" onClick={clear} >clear</button>
<button class="btn btn-info" name='/' onClick={display}>/</button>

                </div>
                </div>
                <div class="row">
                <div class="col-12">
<button class="btn btn-info" onClick={display} name="7">7</button>
<button class="btn btn-info" name="8" onClick={display}>8</button>
<button class="btn btn-info" name="9" onClick={display}>9</button>
<button class="btn btn-info" name="*" onClick={display}>*</button>

                </div>
                </div>
                <div class="row">
                <div class="col-12">
<button class="btn btn-info" name="4" onClick={display}>4</button>
<button class="btn btn-info" name="5" onClick={display}>5</button>
<button class="btn btn-info" name="6" onClick={display}>6</button>
<button class="btn btn-info" name="-" onClick={display}>-</button>

                </div>
                </div>
                <div class="row">
                <div class="col-12">
<button class="btn btn-info" name="1" onClick={display}>1</button>
<button class="btn btn-info" name="2" onClick={display}>2</button>
<button class="btn btn-info" name="3" onClick={display}>3</button>
<button class="btn btn-info" name="+" onClick={display}>+</button>

                </div>
                </div>
                <div class="row">
                <div class="col-12">
<button class="btn btn-info" name="00" onClick={display}>00</button>
<button class="btn btn-info" name="0" onClick={display}>0</button>
<button class="btn btn-info" name="." onClick={display}>.</button>
<button class="btn btn-info" name="=" onClick={cal}>=</button>

                </div>
                </div>
            </div>

        // </div>

    );
}
