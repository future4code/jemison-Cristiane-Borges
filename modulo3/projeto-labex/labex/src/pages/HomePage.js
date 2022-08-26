import React from "react";
import { useNavigate} from "react-router-dom";
import {ContainerHome }from "../style/homePage"
// import {formLogin} from "../style/homePage"


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
<ContainerHome>
  <h1>Bem Vindo!</h1>
  <formLogin>
  <button onClick={goToTrip}>Visualizar Viagens</button>
  <button onClick={goToLogin}>Logout</button>
  <button onClick={goToAdm}>Área Administrativa</button>
  </formLogin>
</ContainerHome>



  );
}

export default HomePage;