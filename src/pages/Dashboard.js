import React, { useState } from 'react';
import Receitas from '../components/Receitas';
import Despesas from '../components/Despesas';
import Grafico from '../components/Grafico';
import { Container, Grid } from '@/components/ui';

function Dashboard() {
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-8 mt-2">Dashboard</h1>
      <Grid columns={2} gap={8}>
        <Receitas receitas={receitas} setReceitas={setReceitas} />
        <Despesas despesas={despesas} setDespesas={setDespesas} />
      
      <Grafico receitas={receitas} despesas={despesas} />
      </Grid>
    </Container>
  );
}

export default Dashboard;