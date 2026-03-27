import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import { NavLink } from 'react-router-dom'
import SoftAurora from '../reactbits/SoftAurora/SoftAurora'

const quickPoints = [
  'Design premium e minimale',
  'Velocità e performance elevate',
  'Immagine più autorevole',
]

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#060210',
      }}
    >
      {/* Aurora molto più soft */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.55,
          zIndex: 0,
          // filter: 'blur(5px)',
        }}
      >
        <SoftAurora />
      </Box>

      {/* Overlay per contrasto */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 30%, rgba(166,117,255,0.12), transparent 40%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
          sx={{ py: { xs: 10, md: 12 } }}
        >
          {/* CHIP migliorato */}
          <Chip
            icon={<AutoAwesomeRoundedIcon sx={{ fontSize: 16 }} />}
            label="Web design per professionisti"
            sx={{
              backdropFilter: 'blur(12px)',
              bgcolor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(240,230,255,0.85)',
              px: 1.5,
              height: 36,
            }}
          />

          {/* HEADLINE con gradient intelligente */}
          <Typography
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '4rem',
                md: '5.5rem',
              },
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: '-0.06em',
              maxWidth: '15ch',
              color: '#F8F5FF',
            }}
          >
            Presenza digitale{' '}
            <Box
              component="span"
              sx={{
                background:
                  'linear-gradient(135deg, #F06BD8, #A675FF, #7B61FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              elegante
            </Box>{' '}
            costruita per{' '}
            <Box
              component="span"
              sx={{
                color: '#A675FF',
              }}
            >
              lasciare il segno
            </Box>
          </Typography>

          {/* SUBTEXT migliorato */}
          <Typography
            sx={{
              maxWidth: 720,
              color: 'rgba(220,210,255,0.72)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            Realizzo siti web moderni e ad alto impatto visivo per brand e
            professionisti che vogliono distinguersi, comunicare valore e
            aumentare la propria credibilità online.
          </Typography>

          {/* CTA migliorate */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={NavLink}
              to="/contact"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                px: 5,
                py: 1.6,
                borderRadius: '999px',
                fontWeight: 700,
                background:
                  'linear-gradient(135deg, #F06BD8, #A675FF)',
                color: '#fff',
                boxShadow:
                  '0 12px 40px rgba(166,117,255,0.35)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow:
                    '0 18px 50px rgba(166,117,255,0.5)',
                },
              }}
            >
              Richiedi un progetto
            </Button>

            <Button
              component={NavLink}
              to="/projects"
              endIcon={<NorthEastRoundedIcon />}
              sx={{
                px: 5,
                py: 1.6,
                borderRadius: '999px',
                color: '#D8CCFF',
                border: '1px solid rgba(255,255,255,0.12)',
                '&:hover': {
                  background: 'rgba(255,255,255,0.05)',
                },
              }}
            >
              Guarda i lavori
            </Button>
          </Stack>

          {/* FEATURES migliorate */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ pt: 2 }}
          >
            {quickPoints.map((item) => (
              <Stack key={item} direction="row" spacing={1} alignItems="center">
                <Box
                  sx={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #A675FF, #7B61FF)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <CheckRoundedIcon sx={{ fontSize: 14, color: '#fff' }} />
                </Box>

                <Typography
                  sx={{
                    color: 'rgba(230,220,255,0.75)',
                    fontSize: '0.95rem',
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}