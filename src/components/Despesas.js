import React, { useState } from 'react';
import { Card, Input, Button, List, ListItem } from '@/components/ui';

function Despesas({ despesas, setDespesas }) {
  const [novaDespesa, setNovaDespesa] = useState({ descricao: '', valor: 0 });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovaDespesa({
      ...novaDespesa,
      [name]: name === 'valor' ? Number(value) : value, // Ensure valor is a number
    });
  };

  const adicionarDespesa = () => {
    if (novaDespesa.valor < 0) {
      setError('O valor não pode ser negativo.');
      return;
    }
    setError('');
    setDespesas([...despesas, { ...novaDespesa, id: Date.now() }]);
    setNovaDespesa({ descricao: '', valor: 0 });
  };

  const excluirDespesa = (id) => {
    setDespesas(despesas.filter((d) => d.id !== id));
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">Despesas</h2>
      <div className="flex space-x-4 mb-4">
        <Input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={novaDespesa.descricao}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          name="valor"
          placeholder="Valor"
          value={novaDespesa.valor}
          onChange={handleInputChange}
        />
        <Button onClick={adicionarDespesa}>Adicionar Despesa</Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <List>
        {despesas.map((despesa) => (
          <ListItem key={despesa.id}>
            <div className="flex justify-between items-center">
              <span>{despesa.descricao} - R$ {despesa.valor.toFixed(2)}</span>
              <Button onClick={() => excluirDespesa(despesa.id)}>Excluir</Button>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Despesas;
