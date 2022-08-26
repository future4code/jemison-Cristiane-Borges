import axios from "axios";
import React, { useEffect } from "react";
import {URL}  from "../constants/constants";
import useProtectPage from "../hooks/useProtectPage"
import {useNavigate} from "react-router-dom"

function TripDetailsPage() {
const navigate =useNavigate()
    useProtectPage()

    useEffect(()=>{
      const token = localStorage.getItem("token")

      axios.get(`${URL}trip/:id`,{
        headers:{
        auth: token
        }
      }).then((response)=>{
        localStorage.getItem("token",response.data.token)
      }).catch((error)=>{
      console.log("Deu erro:", error.response)
    })  
    },[])
    // const  details = data && data.tri.id && data.trip.id.map((trip)=>{

    //   return (
    //      <div key={trip.id}>
    //     <p>{trip.planet}</p>
    //     <p>{trip.durationInDays}</p>
    //     <p>{trip.date}</p>
    //     <p>{trip.name}</p>
    //     <p>{trip.description}</p>
    //     <p>{trip.candidates}</p>
    //      </div>)
    // })
    const goToSubcription= ()=>{
              navigate("/inscricao")
      }


  return (
    <section>
      {/* {details} */}
    

    <button onClick={goToSubcription}>Inscreva-se para uma viagem</button>
   
  </section>
  
  )
}

export default TripDetailsPage;