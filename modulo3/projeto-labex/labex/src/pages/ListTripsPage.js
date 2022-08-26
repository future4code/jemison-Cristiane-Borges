
import useRequestData from "../hooks/useRequestData";
import {URL_TRIP} from "../constants/constants";
import React from "react";
import { useNavigate } from "react-router-dom";


function ListTripsPage() {
 const [data, isLoading, error]= useRequestData(`${URL_TRIP}trips`)
 const navigate= useNavigate()

 const listTrip = data && data.trips && data.trips.map((lista)=>{

  return (
      <div key={lista.id}>
          <p>{lista.name}</p>
          <p>{lista.description}</p>
          <p>{lista.planet}</p>
          <p>{lista.durationInDays}</p>
          <p>{lista.date}</p>
        </div>)
        })
  const goToSubcription= ()=>{
          navigate("/inscricao")
  }
  

    
  return (
    <div >
    {isLoading && <p>...Carregando Viagens</p>}
    {!isLoading && error &&<p>Ocorreu um erro</p>}
    {!isLoading && data && data.trips && data.trips.length >0 && listTrip}
    {!isLoading && data && data.trips && data.trips.length === 0 && <p>A lista esta vazia!</p>}

    <button onClick={goToSubcription}> Se increver para uma viagem</button>
     
    </div>
  );
}
export default ListTripsPage;