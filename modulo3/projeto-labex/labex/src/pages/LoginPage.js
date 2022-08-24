import React from "react";
import { useNavigate } from "react-router-dom";


function LoginPage() {
    const [email, setEmail]=("")
    const [senha, setSenha] =("")

    const fazerLogin=(event)=>{
        event.preventDefault()


    }


    const navigate= useNavigate()

    const goBack= ()=>{
        navigate(-1)
    }
    return (
        <div >
            <h1>Faça seu Login!</h1>

            <form onSubmit={fazerLogin}>
                <input
                type="text"
                value={email}
                placeholder="Insira seu e-mail" 
                onChange={}
                />                
                
                <input 
                type="password" 
                value={senha}
                placeholder="Insira sua senha" 
                />                
               
                <input type="submit" onClick={goBack} value="Voltar" />
                <input type="submit" value="Enviar" />
                </form>
        </div>
      
      
    );
}

export default LoginPage;