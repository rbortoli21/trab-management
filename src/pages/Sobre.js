import React from 'react';
import { Container, Card, CardHeader, CardContent } from '@/components/ui';

function Sobre() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold">Sobre</h1>
        </CardHeader>
        <CardContent>
          <p>
            Site criado por Rafael Bortoli para ajudar as pessoas a gerenciar suas finanças pessoais.
            Sinta-se livre para entrar em contato se tiver alguma dúvida ou sugestão.
          </p>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Sobre;