'use client';

import React from 'react';
import { Box, Container, Title, Grid, Card, Text, Badge, Button, Group, Stack } from '@mantine/core';
import { IconFirstAidKit, IconCards, IconBrandYoutube } from '@tabler/icons-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  techs: string[];
  icon: React.ReactNode;
  gradient: string;
  demoUrl?: string;
  demoLabel?: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'PillPusher',
      subtitle: '1st Place Indiana HIMSS FHIR Connectathon',
      description: 'Together with a couple coworkers I participated in the Indiana HIMSS FHIR Connectathon. We built out a REST API based server that would sync with FHIR based healthcare servers to retrieve data about a patients medication orders. The medication information would then be served via REST API, as well as automatically triggering push notifications to a mobile device when it needs to be taken. We took first place, and I have linked a video of our final presentation. Apologies for the shaky iPhone recording.',
      techs: ['FHIR', 'REST API', 'Push Notifications', 'Healthcare IT'],
      icon: <IconFirstAidKit size={48} stroke={1.5} />,
      gradient: 'linear-gradient(135deg, rgba(112, 72, 232, 0.2) 0%, rgba(34, 184, 191, 0.05) 100%)',
      demoUrl: 'https://www.youtube.com/watch?v=5I2D5V_4BjA',
      demoLabel: 'Watch Demo Video',
    },
    {
      title: 'MagicTCGPriceAPI',
      subtitle: 'Personal / Open Source Project',
      description: 'This was a project I started way back in 2013 when I was quite infatuated with Magic the Gathering. I decided I needed more open access to card information/pricing, so I wrote a Google App Engine python server to scrape data from various websites. (TCGPlayer, Star City Games, etc) This project was something I sort of just kicked out in a weekend, and then forgot about. Until one day many months later when I received an issue opened notification, my first on Github. After determining the error, I was able to figure out that I was actually hitting Google Cloud\'s free quota daily, something to the tune of 48k requests per day.',
      techs: ['Python', 'Google App Engine', 'Web Scraping', 'API Design'],
      icon: <IconCards size={48} stroke={1.5} />,
      gradient: 'linear-gradient(135deg, rgba(34, 184, 191, 0.2) 0%, rgba(112, 72, 232, 0.05) 100%)',
    },
  ];

  return (
    <Box
      id="work"
      component="section"
      style={{
        position: 'relative',
        padding: '80px 0',
      }}
    >
      {/* Background Ambient Glow */}
      <Box className="ambient-glow glow-cyan" style={{ top: '150px', right: '-150px' }} />

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
            My Work
          </Title>
          <Box style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)', flexGrow: 1 }} />
        </Box>

        {/* Projects Grid */}
        <Grid gap="xl">
          {projects.map((proj, idx) => (
            <Grid.Col key={idx} span={{ base: 12, md: 6 }} style={{ display: 'flex' }}>
              <Card
                className="glass-panel glass-panel-hover"
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'rgba(29, 32, 38, 0.3)',
                }}
              >
                {/* Visual Header Block */}
                <Box
                  style={{
                    height: '180px',
                    background: proj.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <Box
                    style={{
                      color: idx === 0 ? 'var(--mantine-color-brandViolet-2)' : 'var(--mantine-color-brandCyan-3)',
                      opacity: 0.85,
                    }}
                  >
                    {proj.icon}
                  </Box>
                </Box>

                {/* Details Section */}
                <Stack p="lg" gap="md" style={{ flexGrow: 1, justifyContent: 'space-between' }}>
                  <Stack gap="xs">
                    <Title
                      order={3}
                      style={{
                        fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'var(--mantine-color-white)',
                      }}
                    >
                      {proj.title}
                    </Title>
                    <Text
                      size="xs"
                      style={{
                        fontFamily: 'var(--font-geist-mono), monospace',
                        fontWeight: 500,
                        color: idx === 0 ? 'var(--mantine-color-brandViolet-3)' : 'var(--mantine-color-brandCyan-3)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {proj.subtitle}
                    </Text>
                    <Text
                      size="sm"
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        color: 'var(--mantine-color-dark-1)',
                        lineHeight: 1.6,
                        marginTop: '8px',
                      }}
                    >
                      {proj.description}
                    </Text>
                  </Stack>

                  {/* Footing Tech Tags & CTA Button */}
                  <Stack gap="md" style={{ marginTop: 'auto' }}>
                    <Group gap="xs">
                      {proj.techs.map((t, tIdx) => (
                        <Badge
                          key={tIdx}
                          variant="filled"
                          color="dark.5"
                          styles={{
                            root: {
                              fontFamily: 'var(--font-geist-mono), monospace',
                              fontSize: '11px',
                              fontWeight: 500,
                              textTransform: 'none',
                              color: 'var(--mantine-color-dark-0)',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              padding: '8px 10px',
                              height: 'auto',
                            },
                          }}
                        >
                          {t}
                        </Badge>
                      ))}
                    </Group>

                    {proj.demoUrl && (
                      <Button
                        component="a"
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftSection={<IconBrandYoutube size={16} />}
                        variant="transparent"
                        color="brandViolet"
                        styles={{
                          root: {
                            width: 'fit-content',
                            padding: 0,
                            height: 'auto',
                            fontSize: '13px',
                            fontWeight: 500,
                            fontFamily: 'var(--font-geist-mono), monospace',
                            color: 'var(--mantine-color-brandViolet-3)',
                            '&:hover': {
                              color: 'var(--mantine-color-brandViolet-2)',
                              textDecoration: 'underline',
                            },
                          },
                        }}
                      >
                        {proj.demoLabel}
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default Projects;
