import React from "react";
import { useNavigate} from "react-router-dom";

function HomePage() {
const navigate = useNavigate();

const goToTrip= ()=>{

  navigate("/Viagens")
}
const goToLogin =()=>{

  navigate("/adm")
}

  return (
<section>
  <h1>Bem Vindo!</h1>
  <button onClick={goToTrip}>Pagina de Viagens</button>
  <button onClick={goToLogin}>Pagina de Login</button>
</section>



  );
}

export default HomePage;