import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import {URL_LG} from "../constants/constants";


function LoginPage() {
    const {form, onChange}= useForm({emai:"", password:""})
    const navigate = useNavigate()

    const handleClick=(event)=>{
        event.preventDefault()
        axios.post(`${URL_LG}cristiane-jemison/login`,form)
        .then((response)=>{
            localStorage.setItem("token",response.data.token)
            navigate("/Viagens")
           console.log (response.data)        
        }).catch((error)=>{
            alert ("E-mail ou senha incorretos. Tente de novo!", error)
            navigate("/login")
        })
    }   
    
    const goBack= ()=>{
        navigate(-1)
    }

    return (
        <div className="HomePage">
            <h1>Faça seu Login!</h1>

            <form onSubmit={handleClick}>
                <label htmlFor="email">E-mail: </label>
                <input
                // id="email"
                type="email"
                value={form.email}
                placeholder="Insira seu e-mail" 
                required
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={onChange}
                />      

                <label htmlFor="password">Senha: </label>
                <input 
                // id="password"
                type="password" 
                name="password"
                value={form.password}
                placeholder="Insira sua senha" 
                onChange={onChange}
                pattern="^.{3,}"
                required               
                />                
               
               
                <button type="submit"> Enviar </button>
                </form>
                <button  onClick={goBack}>Voltar</button> 
        </div>
      
      
    );
}

export default LoginPage;