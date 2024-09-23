import React from 'react';
import { Container, Card, CardHeader, CardContent } from '@/components/ui';

function Home() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold">Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
        </CardHeader>
        <CardContent>
          <p>
            Aqui você pode gerenciar suas receitas e despesas mensais.
            Adicione, edite e exclua suas receitas e despesas, e veja um resumo dos seus gastos.
          </p>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Home;