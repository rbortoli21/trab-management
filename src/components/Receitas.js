import React, { useState } from 'react';
import { Card, Input, Button, List, ListItem } from '@/components/ui';

function Receitas({ receitas, setReceitas }) {
  const [novaReceita, setNovaReceita] = useState({ descricao: '', valor: 0 });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovaReceita({
      ...novaReceita,
      [name]: name === 'valor' ? Number(value) : value,
    });
  };

  const adicionarReceita = () => {
    if (novaReceita.valor < 0) {
      setError('O valor não pode ser negativo.');
      return;
    }
    setError('');
    setReceitas([...receitas, { ...novaReceita, id: Date.now() }]);
    setNovaReceita({ descricao: '', valor: 0 });
  };

  const excluirReceita = (id) => {
    setReceitas(receitas.filter((r) => r.id !== id));
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">Receitas</h2>
      <div className="flex space-x-4 mb-4">
        <Input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={novaReceita.descricao}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          name="valor"
          placeholder="Valor"
          value={novaReceita.valor}
          onChange={handleInputChange}
        />
        <Button onClick={adicionarReceita}>Adicionar Receita</Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <List>
        {receitas.map((receita) => (
          <ListItem key={receita.id}>
            <div className="flex justify-between items-center">
              <span>{receita.descricao} - R$ {receita.valor.toFixed(2)}</span>
              <Button onClick={() => excluirReceita(receita.id)}>Excluir</Button>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Receitas;
