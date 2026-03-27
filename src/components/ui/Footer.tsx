import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.02)',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} EIWA — Web experiences for modern businesses.
        </Typography>
      </Container>
    </Box>
  )
}