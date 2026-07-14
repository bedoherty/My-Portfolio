'use client';

import React from 'react';
import { Box, Container, Card, Text, ThemeIcon, Stack } from '@mantine/core';
import { IconTerminal2 } from '@tabler/icons-react';

export const About: React.FC = () => {
  return (
    <Box
      id="about"
      component="section"
      style={{
        position: 'relative',
        padding: '80px 0',
      }}
    >
      <Container size="sm">
        <Card
          className="glass-panel"
          style={{
            padding: '40px 24px',
            borderRadius: '16px',
            background: 'linear-gradient(180deg, rgba(39, 42, 49, 0.4) 0%, rgba(16, 19, 26, 0.2) 100%)',
            borderTop: '1px solid rgba(112, 72, 232, 0.3)', // Violet border top
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Stack align="center" gap="md">
            <ThemeIcon
              size="xl"
              radius="md"
              variant="light"
              color="brandViolet"
              styles={{
                root: {
                  backgroundColor: 'rgba(112, 72, 232, 0.1)',
                  border: '1px solid rgba(112, 72, 232, 0.2)',
                  color: 'var(--mantine-color-brandViolet-3)',
                },
              }}
            >
              <IconTerminal2 size={24} />
            </ThemeIcon>

            <Text
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'var(--mantine-color-dark-1)',
              }}
            >
              This site was a personal project I spun up for several reasons. First off,
              I really enjoyed developing in React Native and wanted more web-based React JS
              experience. Secondly, I realized I had no good way to present myself and my resume
              and wanted to remedy that situation. And lastly, having worked in the Healthcare IT
              field for so long, I wanted to prove to myself that I was still capable of using
              modern web frameworks.
            </Text>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};
export default About;
