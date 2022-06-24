import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import eu from './img/eu.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={eu}
          nome="Cristiane de Lima Borges"
          descricao="Oi! Eu sou a Cristiane, mas pode me chamar de Cris! Adoro ficar em casa assistindo séries ou jogando online com amigos"
        />


        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
      </div>
      
        <CardPequeno
          informeEmail="E-mail:"
          email="lima_cristianeborges@hotmail.com"
          informeEndereco="Endereço:"
          endereco="Travessa Atlantida Sul, 133 - Campeche/ Florianópolis"
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
         imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="RBOOH"
          descricao="Atualmente, trabalho em uma plataforma online de Midia Out Off Home, como assistente administrativo e estou estudando Web FullStack para me tornar uma desenvolvedora dentro da empresa."
        />

        <CardGrande
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
