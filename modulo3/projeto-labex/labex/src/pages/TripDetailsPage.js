import React from "react";
import useRequestData from "../hooks/useRequestData";
import useProtectPage from "../hooks/useProtectPage"
import {useNavigate, useParams} from "react-router-dom"
import { URL_TRIPDEATAILS} from "../constants/constants"
// import { Button}from "../style/homePage"

function TripDetailsPage() {
const navigate =useNavigate()

    useProtectPage() 

    const params=useParams()

    const headers={

      headers:{

        auth: localStorage.getItem("token")
      }
    }

    const [data]= useRequestData(`${URL_TRIPDEATAILS}trip/${params.id}`, headers)
    // console.log(details)

    
    const  details = data && data.trip && data.trip.candidates.map(trips=>{

      return (
         <div key={trips.id}>
        <p>{trips.applicationText}</p>
        <p>{trips.profession}</p>
        <p>{trips.age}</p>
        <p>{trips.name}</p>
        <p>{trips.country}</p>
        </div>)
    })
    const goToSubcription= ()=>{
              navigate("/inscricao")
      }


  return (
    <div>
      {data && data.trip && data.trip.candidates.length ? details: <p>Sem candidatos pendentes</p>}
     

    <button onClick={goToSubcription}>Inscreva-se para uma viagem</button>
   
  </div>
  
  )
}

export default TripDetailsPage;