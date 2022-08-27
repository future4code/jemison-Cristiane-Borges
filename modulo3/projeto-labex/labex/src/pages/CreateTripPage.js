import React from "react";
import useProtectPage from "../hooks/useProtectPage"

function CreatTripPage() {
  useProtectPage()
  return (
    <div >
    <h1>Criar uma viagem</h1>

      <form >       
    <input
    type="email"
    value=""
    placeholder="Insira seu e-mail" 
    required
    name="email"
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    
    />      

    <input   
    type="password" 
    name="password"
    placeholder="Insira sua senha"     
    pattern="^.{3,}"
    required               
    /> 
      </form> 
      
    </div>
  );
}

export default CreatTripPage;