import React from 'react'
import { useSelector } from 'react-redux'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {

//Get Data
  const state = useSelector((data)=>data);
  let busData = state.BusesDetail.Buses.buses;
  console.log(busData)
  
// Logout
let navigate = useNavigate()
  const handleLogout = () => {
    document.querySelector("#User").innerHTML = "Login" 
    navigate('/')
  } 
  
//navigate
  const handleBookingSeat = (e) => {
    let data = JSON.stringify(e);
    navigate(`/Seats?bus=${data}`)
  }
  return (
    <>
    <div style={{backgroundColor: "#e3f2fd"}}>
      <nav class="navbar d-flex w-75 m-auto">
        <div class="d-flex l">
          <li class="list-group-item p-3" style={{cursor:"pointer"}}>Bus Tickets</li>
          <li class="list-group-item p-3" style={{cursor:"pointer"}}>Cab Rental</li>
          <li class="list-group-item p-3" style={{cursor:"pointer"}}>Train Tickets</li>
        </div>
        <div class="d-flex">
          <li class="list-group-item p-3" style={{cursor:"pointer"}}>Help</li>
          <li class="list-group-item p-3" id='User' onClick={handleLogout} style={{cursor:"pointer"}}>Logout</li>
        </div>
      </nav>
    </div>
{/* Bus */}
    <div> 
      {
        busData.map((e,i)=>{
          return(
            <div key={i}>
              <div className='busDetail bg-danger'>
                <h3>{e.From}</h3>
                <i><ArrowForwardIcon/></i>
                <h3>{e.To}</h3>
                <i><ArrowForwardIcon/></i>
                <h4>{e.Date}</h4>
              </div>
              <div>
                {
                e.bus.map((e,i)=>{
                  return( 
                  <div key={i} className='busAbout '>
                    <div style={{display:'flex'}}>
                      <h3 class='p-3 m-3'>{e.BusName}</h3>
                      <h2 class='p-3 m-3'>{e.DepartureTime}</h2>
                      <h2 class='p-3 m-3'>{e.ArrivalTime}</h2>
                    </div>
                    <div style={{display:'flex'}}>
                    <p class='p-3'>{e.StartingPoint}</p>
                    <p class='p-3'>{e.EndingPoint}</p>
                    <h3 class='p-3'>{e.price}</h3>
                    </div>
                    <button className='viewSeatBtn bg-danger' onClick={()=>handleBookingSeat(e)}>VIEW SEATS</button>
                  </div>
                  )
                })
                }
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Home