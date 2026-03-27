import { Button, Stack, Typography } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <Stack
      spacing={3}
      alignItems="center"
      justifyContent="center"
      className="py-24 text-center"
    >
      <Typography variant="h2">404</Typography>

      <Typography variant="h5">
        Pagina non trovata
      </Typography>

      <Typography color="text.secondary" sx={{ maxWidth: 520 }}>
        La pagina che stai cercando non esiste oppure è stata spostata.
      </Typography>

      <Button
        variant="contained"
        component={NavLink}
        to="/"
        startIcon={<HomeRoundedIcon />}
      >
        Torna alla home
      </Button>
    </Stack>
  )
}