import Navbar from "../components/Navbar";
import { Container, Typography, Paper, Avatar, Box } from "@mui/material";

function Profile() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Paper sx={{ padding: 4 }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ width: 60, height: 60 }}>
              H
            </Avatar>

            <Box>
              <Typography variant="h5">Heriberto Sáenz</Typography>
              <Typography color="text.secondary">
                heriberto@email.com
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ mt: 3 }}>
            Esta es la pagina de perfil. Aquí se mostrará la información del usuario.
          </Typography>
        </Paper>
      </Container>
    </>
  );
}

export default Profile;