'use client';

import React from 'react';
import { Box, Container, Title, Text, Timeline, Card, List, ThemeIcon } from '@mantine/core';
import { IconBriefcase, IconTerminal, IconSettings } from '@tabler/icons-react';

interface Job {
  role: string;
  company: string;
  period: string;
  points: string[];
  icon: React.ReactNode;
}

export const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      role: 'Junior Software Engineer',
      company: 'Intelligent Medical Objects',
      period: 'Jan 2016 - Present',
      points: [
        'Responsible for organizing/leading sponsored work with the University of Illinois.',
        'Assisted with building demos for tradeshows/conferences.',
        'Assisted with marketing website redesign.',
      ],
      icon: <IconBriefcase size={16} />,
    },
    {
      role: 'Software Engineering Intern',
      company: 'Intelligent Medical Objects',
      period: 'Jun 2013 - Jan 2016',
      points: [
        'Developed an android app for the R&D department.',
        'Created several internal web apps and sales demos.',
      ],
      icon: <IconTerminal size={16} />,
    },
    {
      role: 'IT Intern / Technical Consultant',
      company: 'EnterpriseWorks',
      period: 'Jun 2012 - Aug 2012',
      points: [
        'Served as IT staff as well as a technical consultant to startup companies in the incubator.',
        'Provided services ranging from writing code for MSP430 microcontrollers to creating websites.',
        'Developed the UIUC Research Park Android App.',
      ],
      icon: <IconSettings size={16} />,
    },
  ];

  return (
    <Box
      id="experience"
      component="section"
      style={{
        position: 'relative',
        padding: '80px 0',
      }}
    >
      {/* Background Ambient Glow */}
      <Box className="ambient-glow" style={{ top: '-100px', left: '-150px' }} />

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
            Work Experience
          </Title>
          <Box style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)', flexGrow: 1 }} />
        </Box>

        {/* Timeline */}
        <Timeline
          active={0}
          bulletSize={36}
          lineWidth={2}
          styles={{
            root: {
              paddingLeft: '12px',
            },
            item: {
              '&::before': {
                borderColor: 'rgba(255, 255, 255, 0.08)',
              },
            },
            itemBullet: {
              backgroundColor: '#191c22',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              borderWidth: '1px',
              color: 'var(--mantine-color-brandCyan-4)',
              boxShadow: '0 0 12px rgba(34, 184, 191, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          {jobs.map((job, idx) => (
            <Timeline.Item
              key={idx}
              bullet={job.icon}
              title={
                <Box style={{ marginBottom: '12px' }}>
                  <Text
                    style={{
                      fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--mantine-color-white)',
                    }}
                  >
                    {job.role}
                  </Text>
                  <Text
                    size="sm"
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      color: 'var(--mantine-color-dark-1)',
                      fontWeight: 500,
                    }}
                  >
                    {job.company}
                  </Text>
                  <Text
                    size="xs"
                    style={{
                      fontFamily: 'var(--font-geist-mono), monospace',
                      color: idx === 0 ? 'var(--mantine-color-brandViolet-3)' : 'var(--mantine-color-dark-3)',
                      marginTop: '4px',
                    }}
                  >
                    {job.period}
                  </Text>
                </Box>
              }
            >
              <Card
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                }}
              >
                <List
                  spacing="sm"
                  size="sm"
                  styles={{
                    item: {
                      fontFamily: 'var(--font-inter), sans-serif',
                      color: 'var(--mantine-color-dark-1)',
                      lineHeight: 1.6,
                    },
                  }}
                >
                  {job.points.map((pt, ptIdx) => (
                    <List.Item key={ptIdx}>{pt}</List.Item>
                  ))}
                </List>
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};
export default Experience;
