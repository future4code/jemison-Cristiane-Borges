import React from "react";
import { useNavigate} from "react-router-dom";
// import {ContainerHome , Button, FormLogin, Titulo}from "../style/homePage"



function HomePage() {
const navigate = useNavigate();

const goToTrip= ()=>{

  navigate("/Viagens")
}
const goToLogin =()=>{

  navigate("/login")
}
const goToAdm =()=>{

  navigate("/adm")
}

  return (
<section>
<section>
  <h1>Bem Vindo!</h1>
  
  <button onClick={goToTrip}>Visualizar Viagens</button>
  <button onClick={goToLogin}>Logout</button>
  <button onClick={goToAdm}>Área Administrativa</button>
  </section>
</section>



  );
}

export default HomePage;