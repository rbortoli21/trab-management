import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card } from '@/components/ui';

function Grafico({ receitas, despesas }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Receitas:", receitas);
    console.log("Despesas:", despesas);
    const resumo = generateResumo(receitas, despesas);
    console.log("Resumo Data:", resumo);
    setData(resumo);
  }, [receitas, despesas]);

  const generateResumo = (receitas, despesas) => {
    const resumo = [];
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    meses.forEach((mes, index) => {
      const receitasMes = receitas
        .filter((r) => new Date(r.id).getMonth() === index)
        .reduce((total, r) => total + r.valor, 0);
      const despesasMes = despesas
        .filter((d) => new Date(d.id).getMonth() === index)
        .reduce((total, d) => total + d.valor, 0);
      resumo.push({ mes, receitas: receitasMes, despesas: despesasMes });
    });

    return resumo;
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">Resumo</h2>
      {data.length > 0 ? (
        <LineChart width={600} height={400} data={data}>
          <XAxis dataKey="mes" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="receitas" stroke="#8884d8" />
          <Line type="monotone" dataKey="despesas" stroke="#82ca9d" />
        </LineChart>
      ) : (
        <p>Nenhum dado disponível para exibir.</p>
      )}
    </Card>
  );
}

export default Grafico;
