import React from "react";
import { useNavigate} from "react-router-dom";

function AdmHomePage() {
  const navigate = useNavigate();
 
  const goBack = () => {
    navigate(-1)
  }
  return (
    <section>
    <h1>Área Administrativa</h1>
    <input type="submit" onClick={goBack} value="Voltar"/>
    <input type="submit" onClick={goBack} value="Voltar"/>
    </section>

  );
}

export default AdmHomePage;