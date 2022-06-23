import './App.css';
import eu from './img/eu.png'

function App() {

  const titulo= "Oiee. Eu sou a Cris!"
  const paragrafo= "Esse é minha primeira pagina criada com React! "
  const mostrarAlerta =() =>{
    alert("Boa Noite!")


  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img src={eu} className='foto-cris' alt='foto-de-uma-pessoa' />

      <p>{paragrafo}</p>

      <button onClick={mostrarAlerta}>Clique Aqui!</button>
      
      
    </div>
  );
}

export default App;
