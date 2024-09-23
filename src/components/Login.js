import React, { useState } from 'react';
import { Card, Input, Button } from '@/components/ui';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      setMessage("Login bem-sucedido!");
      setIsError(false);
    } catch (error) {
      setMessage(`Erro: ${error.message}`);
      setIsError(true);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuário logado com Google:", user);
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    }
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Button 
        onClick={handleLogin}
      >Entrar</Button>
      <Button 
        onClick={handleGoogleLogin} 
        className="mt-4 flex items-center justify-center text-black rounded-md shadow-lg hover:bg-gray-100 transition duration-300 p-2"
      >
        <img 
          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" 
          alt="Google Logo" 
          className="h-5 mr-2"
        />
        Entrar com Google
      </Button>
      {message && (
        <p className={`mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
    </Card>
  );
}

export default Login;
