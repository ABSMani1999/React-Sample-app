import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../RedBus/StyleSheet.css'

const Login = () => {
    const [name, setName] = useState();
    const [mobile,setMobile] = useState();
    const [place,SetPlace] = useState();
    const [loginInput ,setLoginInput] = useState(); 

    const handleUserDetail = (e) => {
        e.preventDefault();
        // console.log(name!=="undefined")
        let getMobileEle = document.querySelector('#mobile');
        if(getMobileEle.value !== ""){
        sessionStorage.setItem("userDetail",JSON.stringify({ name,mobile,place }));
        document.querySelector('.res').style.display = "none";
        document.querySelector('.login').style.display = "inline-block";
        }
        else{
            document.querySelector('.error').style.display = "inline-block";
        }
      }
    let navigate = useNavigate();
    const handleOpenLogin = () => {
        let user = JSON.parse(sessionStorage.getItem('userDetail'));
            if(user.mobile===loginInput){
            navigate("/home");
            }
            else{
                document.querySelector('.error').style.display = "inline-block";
            }
      };

  return (
    <div>
        <div>
            <div className='res'>
                <h1 style={{width: "26%"}}>Register User</h1>
                <from class="d-flex  flex-column w-50 p-3 bg-danger">
                    <input type='text'  class="m-1 p-2" name='name' onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
                    <input type='number' id='mobile' class="m-1 p-2" name='mobile'onChange={(e)=>setMobile(e.target.value)} placeholder='Enter your mobile number'/>
                    <input type='text' class="m-1 p-2" name='place'onChange={(e)=>SetPlace(e.target.value)}placeholder='Enter your native place'/>
                    <button onClick={handleUserDetail} class="m-auto p-1 w-50" style={{border:"none"}}>Submit</button>
                    <p className='error' style={{display:"none",color:"#fff"}}>Please enter valid answer</p>
                </from>
            </div>
            <div className='login bg-danger' style={{display:"none"}}>
                <h1>Login User</h1>
                <input type='number' class="m-1 p-2" onChange={(e)=>setLoginInput(e.target.value)} placeholder='Enter register number'/>
                <button onClick={handleOpenLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login