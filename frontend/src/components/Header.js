import React from 'react';
import { AppShell, Header, Container, Title, Group, Text } from '@mantine/core';

function CustomHeader({ totalCount }) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Container className="flex justify-between items-center">
            <Title order={2}>Creche Dashboard</Title>
            <Group>
              <Text size="lg" weight={500}>Total Count: {totalCount}</Text>
            </Group>
          </Container>
        </Header>
      }
    >
      {/* You can add other layout components here if needed */}
    </AppShell>
  );
}

export default CustomHeader;