import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Footer from '../components/Footer';
import { Box } from '@mantine/core';

export default function Home() {
  return (
    <Box style={{ backgroundColor: '#10131a', minHeight: '100vh', position: 'relative' }}>
      {/* Navigation */}
      <Header />

      {/* Hero Banner */}
      <Hero />

      {/* Main Content Area */}
      <Box component="main" style={{ zIndex: 10, position: 'relative' }}>
        {/* Experience Timeline */}
        <Experience />

        {/* Projects Grid */}
        <Projects />

        {/* Skills Lists */}
        <Skills />

        {/* About Card */}
        <About />
      </Box>

      {/* Footer Details */}
      <Footer />
    </Box>
  );
}
