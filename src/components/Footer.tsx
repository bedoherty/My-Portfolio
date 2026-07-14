'use client';

import React from 'react';
import { Box, Container, Group, Text, Anchor, Stack } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      style={{
        width: '100%',
        padding: '40px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        background: '#0b0e14',
      }}
    >
      <Container size="lg">
        <Group justify="space-between" align="center" style={{ flexDirection: 'row' }}>
          <Text
            size="xs"
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              color: 'var(--mantine-color-brandCyan-4)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textAlign: 'center',
            }}
          >
            © 2017 - 2026 Brian Doherty.
          </Text>

          <Group gap="md">
            <Anchor
              href="https://github.com/bedoherty"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: 'var(--mantine-color-dark-1)' }}
              className="social-icon-link"
            >
              <IconBrandGithub size={22} />
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/in/bdoherty92/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: 'var(--mantine-color-dark-1)' }}
              className="social-icon-link"
            >
              <IconBrandLinkedin size={22} />
            </Anchor>
          </Group>
        </Group>
      </Container>

      <style jsx global>{`
        .social-icon-link {
          transition: color 0.2s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .social-icon-link:hover {
          color: var(--mantine-color-brandCyan-3) !important;
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(34, 184, 191, 0.3);
        }
      `}</style>
    </Box>
  );
};
export default Footer;
