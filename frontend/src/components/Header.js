import React from 'react';
import { Header, Container, Title, Group, Text } from '@mantine/core';

function CustomHeader({ totalCount }) {
  return (
    <Header height={60} p="xs">
      <Container className="flex justify-between items-center">
        <Title order={2}>Creche Dashboard</Title>
        <Group>
          <Text size="lg" weight={500}>Total Count: {totalCount}</Text>
        </Group>
      </Container>
    </Header>
  );
}

export default CustomHeader;