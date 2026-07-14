'use client';

import React from 'react';
import { Box, Container, Title, Grid, Card, Badge, Group, Stack } from '@mantine/core';

export const Skills: React.FC = () => {
  const platforms = [
    'Android',
    'React Native',
    'React JS',
    'Electron',
    'Django',
    'Flask',
    'NodeJS',
    'Drupal',
  ];

  const languages = [
    'C#',
    'Java',
    'Python',
    'Javascript',
    'Rust',
    'Go',
    'PHP',
    'C++',
  ];

  return (
    <Box
      id="skills"
      component="section"
      style={{
        position: 'relative',
        padding: '80px 0',
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
          <Title
            order={2}
            style={{
              fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
              fontSize: '28px',
              fontWeight: 800,
              color: 'var(--mantine-color-white)',
              whiteSpace: 'nowrap',
            }}
          >
            My Skills
          </Title>
          <Box style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)', flexGrow: 1 }} />
        </Box>

        {/* Skills Cards Grid */}
        <Grid gap="xl">
          {/* Platforms Card */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '16px',
                background: 'rgba(29, 32, 38, 0.3)',
                height: '100%',
              }}
            >
              <Stack gap="xl">
                <Title
                  order={3}
                  style={{
                    fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--mantine-color-white)',
                  }}
                >
                  Platforms
                </Title>
                <Group gap="sm">
                  {platforms.map((plat, idx) => (
                    <Badge
                      key={idx}
                      variant="light"
                      color="brandViolet"
                      styles={{
                        root: {
                          backgroundColor: 'rgba(112, 72, 232, 0.1)',
                          border: '1px solid rgba(112, 72, 232, 0.3)',
                          color: 'var(--mantine-color-brandViolet-2)',
                          fontFamily: 'var(--font-geist-mono), monospace',
                          fontSize: '13px',
                          fontWeight: 500,
                          textTransform: 'none',
                          padding: '10px 14px',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      {plat}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Languages Card */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '16px',
                background: 'rgba(29, 32, 38, 0.3)',
                height: '100%',
              }}
            >
              <Stack gap="xl">
                <Title
                  order={3}
                  style={{
                    fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--mantine-color-white)',
                  }}
                >
                  Languages
                </Title>
                <Group gap="sm">
                  {languages.map((lang, idx) => (
                    <Badge
                      key={idx}
                      variant="light"
                      color="brandCyan"
                      styles={{
                        root: {
                          backgroundColor: 'rgba(34, 184, 191, 0.1)',
                          border: '1px solid rgba(34, 184, 191, 0.3)',
                          color: 'var(--mantine-color-brandCyan-3)',
                          fontFamily: 'var(--font-geist-mono), monospace',
                          fontSize: '13px',
                          fontWeight: 500,
                          textTransform: 'none',
                          padding: '10px 14px',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      {lang}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
export default Skills;
