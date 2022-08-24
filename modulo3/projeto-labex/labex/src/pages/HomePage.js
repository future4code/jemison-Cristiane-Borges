import React from "react";
import { useNavigate} from "react-router-dom";

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
  <h1>Bem Vindo!</h1>
  <button onClick={goToTrip}>Visualizar Viagens</button>
  <button onClick={goToLogin}>Pagina de Login</button>
  <button onClick={goToAdm}>Área Administrativa</button>
</section>



  );
}

export default HomePage;