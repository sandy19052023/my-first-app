import './App.css';
import Register from './login/register';
// import Arr from './array of object/array';
// import Cal from './calculator';
// import Click from './color/click';
// import Axios from './crud/axios';
// import Login from './login/loginPage';
import LoginSample from './login/loginSample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default function App(){
  // let obj={
  //     name:"SANDEEP_RAJ_R",
  //     DOB:19_05_2001,
  //     age:22,
  //     degree:"MCA",
  //     lang:"REACT_JS" }<Pro a={obj}/> down
  
  return (
  <>
 {/* <Click/> */}
 {/* <Cal/> */}
 {/* <Arr/> */}
 {/* <Axios></Axios> */}
 {/* <Login/> */}
 {/* <LoginSample/> */}
 {/* <Register/> */}
<BrowserRouter>
<Routes>
  
  <Route path='/' element={<LoginSample/>}/>
  <Route path='/a'element={<Register/>}/>
</Routes> 
</BrowserRouter>



  </>
  );
}
