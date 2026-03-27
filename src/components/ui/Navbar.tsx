import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo.png'

type NavItem = {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Chi sono', to: '/about' },
  { label: 'Progetti', to: '/projects' },
  { label: 'Contatti', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background:
            'linear-gradient(180deg, rgba(10,6,24,0.82) 0%, rgba(8,6,20,0.72) 100%)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          borderBottom: '1px solid rgba(177, 139, 255, 0.12)',
          boxShadow:
            '0 10px 30px rgba(0,0,0,0.32), inset 0 -1px 0 rgba(255,255,255,0.03)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 84,
              justifyContent: 'space-between',
              py: 1.5,
            }}
          >
           <Box
  component={NavLink}
  to="/"
  sx={{
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  }}
>
  <Box
    component="img"
    src={logo}
    alt="EIWA logo"
    sx={{
      height: 36,
      width: 'auto',
      objectFit: 'contain',
      filter: 'drop-shadow(0 0 10px rgba(168,117,255,0.25))',
      transition: 'all .3s ease',
      '&:hover': {
        filter: 'drop-shadow(0 0 18px rgba(168,117,255,0.4))',
        transform: 'scale(1.03)',
      },
    }}
  />
</Box>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                p: 0.75,
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(177, 139, 255, 0.09)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  sx={{
                    minWidth: 'auto',
                    color: 'rgba(230, 232, 255, 0.72)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    borderRadius: '999px',
                    transition: 'all .25s ease',
                    '&:hover': {
                      color: '#FFFFFF',
                      background:
                        'linear-gradient(180deg, rgba(170,120,255,0.10) 0%, rgba(120,72,255,0.08) 100%)',
                    },
                    '&.active': {
                      color: '#FFFFFF',
                      background:
                        'linear-gradient(180deg, rgba(182,132,255,0.20) 0%, rgba(129,84,255,0.14) 100%)',
                      border: '1px solid rgba(190, 150, 255, 0.18)',
                      boxShadow:
                        '0 0 0 1px rgba(255,255,255,0.02) inset, 0 8px 24px rgba(124, 76, 255, 0.16)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                component={NavLink}
                to="/contact"
                sx={{
                  ml: 0.5,
                  px: 2.2,
                  py: 1,
                  borderRadius: '999px',
                  textTransform: 'none',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  background:
                    'linear-gradient(135deg, #C86BFF 0%, #8B5CFF 45%, #6E5BFF 100%)',
                  boxShadow:
                    '0 10px 30px rgba(139, 92, 255, 0.32), inset 0 1px 0 rgba(255,255,255,0.16)',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #D07BFF 0%, #9A6BFF 45%, #7A69FF 100%)',
                    boxShadow:
                      '0 14px 34px rgba(139, 92, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.18)',
                  },
                }}
              >
                Parliamone
              </Button>
            </Stack>

            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: '#F5F7FF',
                width: 46,
                height: 46,
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(177, 139, 255, 0.14)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                '&:hover': {
                  background: 'rgba(168, 117, 255, 0.08)',
                },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background:
              'linear-gradient(180deg, rgba(10,6,24,0.98) 0%, rgba(8,5,20,0.98) 100%)',
            borderLeft: '1px solid rgba(177, 139, 255, 0.12)',
            boxShadow: '-20px 0 60px rgba(0,0,0,0.45)',
          },
        }}
      >
        <Box sx={{ p: 2.5, height: '100%' }}>
          <Stack spacing={3} sx={{ height: '100%' }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h6"
                sx={{
                  letterSpacing: '0.24em',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#F5F7FF',
                  textTransform: 'uppercase',
                }}
              >
                EIWA
              </Typography>

              <IconButton
                onClick={() => setOpen(false)}
                sx={{
                  color: '#F5F7FF',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(177, 139, 255, 0.12)',
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Box>

            <Stack spacing={1}>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'rgba(230, 232, 255, 0.72)',
                    textTransform: 'none',
                    fontWeight: 500,
                    py: 1.35,
                    px: 1.8,
                    borderRadius: '18px',
                    border: '1px solid transparent',
                    background: 'rgba(255,255,255,0.015)',
                    '&:hover': {
                      color: '#FFFFFF',
                      background:
                        'linear-gradient(180deg, rgba(170,120,255,0.08) 0%, rgba(120,72,255,0.06) 100%)',
                    },
                    '&.active': {
                      color: '#FFFFFF',
                      background:
                        'linear-gradient(180deg, rgba(182,132,255,0.18) 0%, rgba(129,84,255,0.12) 100%)',
                      border: '1px solid rgba(190, 150, 255, 0.16)',
                      boxShadow: '0 8px 24px rgba(124, 76, 255, 0.14)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Box sx={{ mt: 'auto' }}>
              <Button
                variant="contained"
                component={NavLink}
                to="/contact"
                onClick={() => setOpen(false)}
                fullWidth
                sx={{
                  py: 1.4,
                  borderRadius: '18px',
                  textTransform: 'none',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  background:
                    'linear-gradient(135deg, #C86BFF 0%, #8B5CFF 45%, #6E5BFF 100%)',
                  boxShadow:
                    '0 12px 30px rgba(139, 92, 255, 0.28), inset 0 1px 0 rgba(255,255,255,0.14)',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #D07BFF 0%, #9A6BFF 45%, #7A69FF 100%)',
                  },
                }}
              >
                Parliamone
              </Button>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}