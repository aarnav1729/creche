import React from 'react';
import { Group, Header as MantineHeader, Container, Title, Text } from '@mantine/core';
import './HeaderSearch.css';

function CustomHeader({ totalCount }) {
  return (
    <MantineHeader height={60} p="xs" className="header">
      <Container className="inner">
        <Title order={2}>Creche Dashboard</Title>
        <Group>
          <Text size="lg" weight={500}>Total Count: {totalCount}</Text>
        </Group>
      </Container>
    </MantineHeader>
  );
}

export default CustomHeader;