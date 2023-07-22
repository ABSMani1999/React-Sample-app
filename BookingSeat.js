import React, { useEffect, useState } from 'react';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useNavigate, useSearchParams } from 'react-router-dom';


const BookingSeat = () => {
  const [Seats,setSeats] = useState([])
  const navigate = useNavigate()
//Get data
  const [params] = useSearchParams();
  let bus = JSON.parse(params.get('bus'));
  // console.log(bus)
  

  useEffect(()=>{
    const temp = Array.from(Array(bus.seats[0].total)).map((e,i)=>{
      return {
        num : i+1,
        seleced : false,
        isBooked : bus.seats[0].booked.includes(i+1),
      };
    });
    setSeats(temp);
  },[]);

  const handleSelect =(c) => {
    // console.log(c)
    const temp = [...Seats].map((e,i)=>{
      if(c.num===e.num){
        return {
          ...e,
          seleced :!e.seleced,
        };
      }
      else return e
    });
    setSeats(temp);
  }
  
  const handleBook = () => {
    const temp = [...Seats].map((s)=>{
      return {
        ...s,
        seleced : false,
        isBooked : s.isBooked || s.seleced,
      }
    })
    navigate('/home')
    setSeats(temp)
  }

  return (
    <div className='container'>
        <div style={{display:'flex',}}>
          {
            Seats?.map((e,i)=>{
              return <div key={i} onClick={()=> !e.isBooked && handleSelect(e)} style={{marginRight:'40px',marginTop:"10px",marginBottom:'30px',width:'30px',height:'30px',background:e.isBooked || e.seleced ? '#ccc':'black'}}>
                
              </div>
            })
           }
        </div>
        <div style={{display:'flex', justifyContent:'center'}}><p><CircleOutlinedIcon/>Avalabile</p><CircleOutlinedIcon style={{color:'#ccc'}}/>Unavalabile<p></p></div>
        <button className=' bg-danger p-2'style={{border:'none',color:'#fff'}} onClick={()=>handleBook()}>Proceed</button>
    </div>
  )
}

export default BookingSeat