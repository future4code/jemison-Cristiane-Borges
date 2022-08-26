import React from "react";
import { useNavigate} from "react-router-dom";
import useProtectPage from "../hooks/useProtectPage";

function AdmHomePage() {
  const navigate = useNavigate();
  useProtectPage();
 
  const goBack = () => {
    navigate(-1)
  }

  const goToCreate = () => {
    navigate("/criarViagem")
  }
  return (
    <section>
    <h1>Área Administrativa</h1>
    <input type="submit" onClick={goBack} value="Voltar"/>
    <input type="submit" onClick={goToCreate} value="Criar Viagem"/>
    </section>

  );
}

export default AdmHomePage;