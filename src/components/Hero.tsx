'use client';

import React from 'react';
import { Box, Stack, Title, Text } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';

export const Hero: React.FC = () => {
  const handleScrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('experience');
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
      id="home"
      component="header"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        background: '#10131a',
      }}
    >
      {/* Background Image Layer */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/back.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      
      {/* Dark Overlay Layer */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(16, 19, 26, 0.8)',
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <Stack
        gap="md"
        align="center"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 24px',
        }}
      >
        <Title
          order={1}
          style={{
            fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-2px',
            color: 'var(--mantine-color-white)',
          }}
        >
          Brian Doherty
        </Title>

        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            height: '2rem',
          }}
        >
          <Text
            size="lg"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(16px, 4vw, 20px)',
              color: 'var(--mantine-color-dark-1)',
              opacity: 0.8,
            }}
          >
            I am
          </Text>

          <Box className="word-carousel">
            <Box className="word-carousel-inner">
              <Text
                component="span"
                className="word-carousel-item"
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                  fontWeight: 500,
                  color: 'var(--mantine-color-brandViolet-2)',
                }}
              >
                a Professional Software Developer
              </Text>
              <Text
                component="span"
                className="word-carousel-item"
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                  fontWeight: 500,
                  color: 'var(--mantine-color-brandViolet-2)',
                }}
              >
                an Amateur Gamer
              </Text>
              <Text
                component="span"
                className="word-carousel-item"
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                  fontWeight: 500,
                  color: 'var(--mantine-color-brandViolet-2)',
                }}
              >
                a Wannabe Chef
              </Text>
              {/* Loop item to make transition smooth */}
              <Text
                component="span"
                className="word-carousel-item"
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                  fontWeight: 500,
                  color: 'var(--mantine-color-brandViolet-2)',
                }}
              >
                a Professional Software Developer
              </Text>
            </Box>
          </Box>
        </Box>
      </Stack>

      {/* Scroll down indicator */}
      <Box
        onClick={handleScrollToExperience}
        className="animate-bounce-subtle"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          opacity: 0.6,
          cursor: 'pointer',
          transition: 'opacity 0.2s ease',
          zIndex: 2,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.6';
        }}
      >
        <Text
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            color: 'var(--mantine-color-dark-1)',
          }}
        >
          Scroll
        </Text>
        <IconArrowDown size={20} color="white" />
      </Box>
    </Box>
  );
};
export default Hero;
