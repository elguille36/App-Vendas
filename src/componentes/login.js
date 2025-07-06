import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import App from '../App.js'

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/usuarios/login', { email, senha });
      alert(`Bem-vindo(a), ${response.data.usuario.nome}`);
      navigate('/principal');

    } catch (error) {
      console.error(error);
      alert('Erro no login');
    }
  };

  return (
    <div className='Box-content'>
    <form className='Formulario' onSubmit={login}>
      <h2>Fazer Login</h2>
      <input className='Input-form' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className='Input-form' type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button className='Botom-Cadastro-login' type="submit">Entrar</button>
       <Link className='fazer-login' to='/' element={<App />}>Home Page</Link>
    </form>
    </div>
  );
}
