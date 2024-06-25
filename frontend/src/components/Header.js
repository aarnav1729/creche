import React from 'react';
import { AppShell, Container, Title, Group, Text } from '@mantine/core';

function CustomHeader({ totalCount }) {
  return (
    <AppShell
      padding="md"
      header={
        <div style={{ backgroundColor: '#1A202C', padding: '10px 20px' }}>
          <Container className="flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title order={2} style={{ color: 'white' }}>Creche Dashboard</Title>
            <Group>
              <Text size="lg" weight={500} style={{ color: 'white' }}>Total Count: {totalCount}</Text>
            </Group>
          </Container>
        </div>
      }
    >
    </AppShell>
  );
}

export default CustomHeader;