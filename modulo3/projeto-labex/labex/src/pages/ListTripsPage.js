
import useRequestData from "../hooks/useRequestData";
import {URL_TRIP} from "../constants/constants";
import React from "react";



function ListTripsPage() {
 const [data, isLoading, error]= useRequestData(`${URL_TRIP}trips`)

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

    
  return (
    <div >
    {isLoading && <p>...Carregando Viagens</p>}
    {!isLoading && error &&<p>Ocorreu um erro</p>}
    {!isLoading && data && data.trips && data.trips.length >0 && listTrip}
    {!isLoading && data && data.trips && data.trips.length === 0 && <p>A lista esta vazia!</p>}
     
    </div>
  );
}
export default ListTripsPage;