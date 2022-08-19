import React from "react";
import { useNavigate} from "react-router-dom";

function AdmHomePage() {
  const navigate = useNavigate();
  const goToAdm = () => {
    navigate("/adm")
  }

  const goBack = () => {
    navigate(-1)
  }
  return (
    <section>
      <h1>Faça seu Login!</h1>

      <div className="">
        <input type="text" name="user" id="user"
          placeholder="Insira seu e-mail" />
        <div className="underline">
        </div>
        <div className="">
          <input type="password" name="password" id="password"
            placeholder="Insira sua senha" />
          <div className="underline">
          </div>
        </div>
        <input type="submit" onClick={goBack}value="Voltar" />
        <input type="submit" onClick={goToAdm} value="Enviar" />
      </div>
    </section>

  );
}

export default AdmHomePage;