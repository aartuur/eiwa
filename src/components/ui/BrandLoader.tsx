import { Box, Typography, type TypographyProps } from '@mui/material';
import { motion, type MotionProps } from 'framer-motion';
import React from 'react';

const MotionBox = motion(Box);

// Tieni solo questa versione tipizzata correttamente per risolvere il problema del "component"
const MotionTypography = motion(Typography) as React.FC<
  TypographyProps & MotionProps & { component?: React.ElementType }
>;

export default function BrandLoader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at center, rgba(34,12,74,0.28) 0%, rgba(8,3,20,0.82) 38%, #05010c 72%)',
      }}
    >
      {/* ambient background glow */}
      <MotionBox
        sx={{
          position: 'absolute',
          width: { xs: 320, md: 560 },
          height: { xs: 320, md: 560 },
          borderRadius: '50%',
          background: `
            radial-gradient(circle,
              rgba(168,85,247,0.20) 0%,
              rgba(99,102,241,0.14) 30%,
              rgba(236,72,153,0.10) 48%,
              rgba(0,0,0,0) 72%
            )
          `,
          filter: 'blur(18px)',
        }}
        animate={{
          scale: [0.96, 1.04, 0.98],
          opacity: [0.75, 1, 0.8],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* left ambient blur */}
      <MotionBox
        sx={{
          position: 'absolute',
          left: '-10%',
          bottom: '28%',
          width: 320,
          height: 160,
          borderRadius: '999px',
          background:
            'radial-gradient(circle, rgba(236,72,153,0.26) 0%, rgba(236,72,153,0.10) 35%, rgba(0,0,0,0) 72%)',
          filter: 'blur(28px)',
        }}
        animate={{ x: [0, 20, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* right ambient blur */}
      <MotionBox
        sx={{
          position: 'absolute',
          right: '-8%',
          bottom: '32%',
          width: 320,
          height: 160,
          borderRadius: '999px',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(99,102,241,0.08) 35%, rgba(0,0,0,0) 72%)',
          filter: 'blur(30px)',
        }}
        animate={{ x: [0, -24, 0], opacity: [0.28, 0.48, 0.28] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* orbital system */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: 230, md: 310 },
            height: { xs: 230, md: 310 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* outer ring */}
          <MotionBox
            sx={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 0 40px rgba(168,85,247,0.05)',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* tilted orbit */}
          <MotionBox
            sx={{
              position: 'absolute',
              width: '100%',
              height: '58%',
              borderRadius: '50%',
              border: '1px solid rgba(168,85,247,0.20)',
              transform: 'rotate(-18deg)',
              boxShadow: '0 0 24px rgba(168,85,247,0.12)',
            }}
            animate={{ rotate: [-18, 342] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* moving light on orbit */}
          <MotionBox
            sx={{
              position: 'absolute',
              width: 12,
              height: 12,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(196,181,253,1) 35%, rgba(168,85,247,0.65) 65%, rgba(168,85,247,0) 100%)',
              boxShadow:
                '0 0 12px rgba(255,255,255,0.8), 0 0 28px rgba(168,85,247,0.55)',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              transformOrigin: '0px 0px',
            }}
          >
            <Box
              sx={{
                width: { xs: 115, md: 155 },
                height: 0,
                transform: 'translateX(50%) translateY(115px)',
              }}
            />
          </MotionBox>

          {/* central glow */}
          <MotionBox
            sx={{
              position: 'absolute',
              width: { xs: 118, md: 150 },
              height: { xs: 118, md: 150 },
              borderRadius: '50%',
              background: `
                radial-gradient(circle,
                  rgba(255,255,255,0.16) 0%,
                  rgba(196,181,253,0.16) 20%,
                  rgba(168,85,247,0.18) 42%,
                  rgba(99,102,241,0.10) 60%,
                  rgba(0,0,0,0) 100%
                )
              `,
              filter: 'blur(10px)',
            }}
            animate={{
              scale: [0.94, 1.05, 0.98],
              opacity: [0.78, 1, 0.82],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* brand text */}
          <MotionTypography
            component="h1"
            initial={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              position: 'relative',
              zIndex: 3,
              fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem' },
              fontWeight: 900,
              letterSpacing: '-0.07em',
              color: '#f5f1ff',
              userSelect: 'none',
              lineHeight: 1,
              textShadow: '0 0 22px rgba(168,85,247,0.18)',
            }}
          >
            EIWA
          </MotionTypography>
        </Box>

        {/* subtitle */}
        <MotionTypography
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          sx={{
            mt: 1.5,
            fontSize: '0.74rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.52)',
          }}
        >
          Software Solutions
        </MotionTypography>

        {/* loading bar */}
        <Box
          sx={{
            mt: 3.5,
            width: 170,
            height: 3,
            borderRadius: 999,
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.07)',
            position: 'relative',
          }}
        >
          <MotionBox
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              borderRadius: 999,
              background:
                'linear-gradient(90deg, #ec4899 0%, #a855f7 50%, #6366f1 100%)',
              boxShadow: '0 0 20px rgba(168,85,247,0.35)',
            }}
            animate={{
              width: ['0%', '72%', '88%'],
              opacity: [0.8, 1, 0.92],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}