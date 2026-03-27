import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5B8CFF',
      light: '#8FB2FF',
      dark: '#3A63D8',
      contrastText: '#F8FAFC',
    },
    secondary: {
      main: '#7C5CFF',
      light: '#A78BFA',
      dark: '#5B3FD1',
      contrastText: '#F8FAFC',
    },
    background: {
      default: '#060816',
      paper: 'rgba(12, 18, 36, 0.72)',
    },
    text: {
      primary: '#F5F7FF',
      secondary: '#A8B3CF',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
  shape: {
    borderRadius: 24,
  },
  typography: {
    fontFamily: [
      'Inter',
      'SF Pro Display',
      'SF Pro Text',
      'system-ui',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 1.02,
    },
    h2: {
      fontWeight: 750,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          background:
            'radial-gradient(circle at top left, rgba(91,140,255,0.18), transparent 28%), radial-gradient(circle at top right, rgba(124,92,255,0.16), transparent 24%), linear-gradient(180deg, #050816 0%, #070B1A 45%, #050816 100%)',
          color: '#F5F7FF',
        },
        '*': {
          boxSizing: 'border-box',
        },
        '::selection': {
          background: 'rgba(91,140,255,0.35)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(7, 11, 26, 0.55)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 16, 32, 0.72)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow:
            '0 10px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
          paddingBlock: 10,
        },
        containedPrimary: {
          background:
            'linear-gradient(135deg, #6EA8FF 0%, #5B8CFF 45%, #6D5DFF 100%)',
          boxShadow: '0 10px 30px rgba(91,140,255,0.28)',
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.12)',
          color: '#F5F7FF',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#DCE6FF',
        },
      },
    },
  },
})

export default theme