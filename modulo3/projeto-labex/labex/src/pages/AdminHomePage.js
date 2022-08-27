import React from "react";
import { useNavigate} from "react-router-dom";
import useProtectPage from "../hooks/useProtectPage";
import useRequestData from "../hooks/useRequestData";
import {URL_TRIP} from "../constants/constants";


function AdmHomePage() {
  const navigate = useNavigate();
  useProtectPage();

  const [data, isLoading, error]= useRequestData(`${URL_TRIP}trips`)
 
  const listTrip = data && data.trips && data.trips.map((lista)=>{
 
   return (
       <div key={lista.id}>
          <div onClick={()=>goToDetailsPage(lista.id)}>
           <p>{lista.name}</p>
         </div>
         </div>)
         })
  
 const goToDetailsPage = (id)=>{
  navigate(`/DetalhesDaViagem/${id}`)

 }

  const goBack = () => {
    navigate(-1)
  }

  const goToCreate = () => {
    navigate("/criarViagem")
  }
  return (
    <section>
    <h1>Área Administrativa</h1>

    {isLoading && <p>...Carregando Viagens</p>}
    {!isLoading && error &&<p>Ocorreu um erro</p>}
    {!isLoading && data && data.trips && data.trips.length >0 && listTrip}
    {!isLoading && data && data.trips && data.trips.length === 0 && <p>A lista esta vazia!</p>}

    <button type="submit" onClick={goBack} >Voltar</button>
    <button type="submit" onClick={goToCreate} >Criar Viagem</button>
 
    </section>

  );
}

export default AdmHomePage;