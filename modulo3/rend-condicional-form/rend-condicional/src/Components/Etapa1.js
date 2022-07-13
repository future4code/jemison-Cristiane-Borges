import React from "react";
import './Etapa1.css';

function Etapa1() {

  return (
    <section className="etapa1">
      <h1>ETAPA 1 - DADOS GERAIS</h1>

      <label>1. Qual o seu nome?</label>
      <input type="text" name="nome" />

      <label>2. Qual a sua idade?</label>
      <input type="text" name="idade" />

      <label>3. Qual o seu e-mail?</label>
      <input type="text" name="email" />

      <label>4. Qual a sua escolaridade?</label>

      <select>
        <option value="">Selecione a opção</option>
        <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
        <option value="Ensino Médio Completo">Ensino Médio Completo</option>
        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
        <option value="Ensino Superior Completo">Ensino Superior Completo</option>


      </select>





    </section>
  )
}
export default Etapa1