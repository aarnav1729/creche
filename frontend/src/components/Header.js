import React from 'react';
import { Container, Title, Group, Text } from '@mantine/core';

function CustomHeader({ totalCount }) {
  return (
    <div style={{ backgroundColor: '#1A202C', padding: '10px 20px' }}>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title order={2} style={{ color: 'white' }}>Creche Dashboard</Title>
        <Group>
          <Text size="lg" weight={500} style={{ color: 'white' }}>Total Count: {totalCount}</Text>
        </Group>
      </Container>
    </div>
  );
}

export default CustomHeader;