'use client';

import React from 'react';
import { Box, Container, Group, Text, Button, Anchor } from '@mantine/core';

export const Header: React.FC = () => {
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      component="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(16, 19, 26, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      <Container size="lg" style={{ width: '100%' }}>
        <Group justify="flex-end" gap="xl">
          <Group gap="xl" visibleFrom="sm">
            <Anchor
              href="#experience"
              onClick={handleScroll('experience')}
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '14px',
                color: 'var(--mantine-color-dark-1)',
                textDecoration: 'none',
              }}
              className="nav-link"
            >
              Experience
            </Anchor>
            <Anchor
              href="#work"
              onClick={handleScroll('work')}
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '14px',
                color: 'var(--mantine-color-dark-1)',
                textDecoration: 'none',
              }}
              className="nav-link"
            >
              Projects
            </Anchor>
            <Anchor
              href="#skills"
              onClick={handleScroll('skills')}
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '14px',
                color: 'var(--mantine-color-dark-1)',
                textDecoration: 'none',
              }}
              className="nav-link"
            >
              Skills
            </Anchor>
            <Anchor
              href="#about"
              onClick={handleScroll('about')}
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '14px',
                color: 'var(--mantine-color-dark-1)',
                textDecoration: 'none',
              }}
              className="nav-link"
            >
              About
            </Anchor>
          </Group>

          <Button
            component="a"
            href="mailto:bdoherty92@gmail.com" // standard fallback email or contact
            variant="light"
            color="brandViolet"
            size="sm"
            styles={{
              root: {
                backgroundColor: 'rgba(112, 72, 232, 0.15)',
                border: '1px solid rgba(112, 72, 232, 0.3)',
                color: 'var(--mantine-color-brandViolet-2)',
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.5px',
                '&:hover': {
                  backgroundColor: 'rgba(112, 72, 232, 0.25)',
                },
              },
            }}
          >
            Hire Me
          </Button>
        </Group>
      </Container>

      <style jsx global>{`
        .nav-link {
          transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
          padding: 6px 12px;
          border-radius: 6px;
        }
        .nav-link:hover {
          color: var(--mantine-color-white) !important;
          background-color: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </Box>
  );
};
export default Header;
