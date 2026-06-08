import Navbar from "../components/Navbar";
import { Container, Typography, Paper, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LifecycleDemo from "../components/LifecycleDemo";
import useAuth from "../hooks/useAuth";

function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showLifecycle, setShowLifecycle] = useState(true);

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Bienvenido {user?.name || user?.username}
          </Typography>
          <Typography sx={{ mb: 3 }}>
            La aplicación de React ya está conectada con la REST API de Express y MongoDB.
          </Typography>
          <Box display="flex" gap={2}>
            <Button variant="contained" onClick={() => navigate("/users")}>
              Administrar usuarios
            </Button>
            <Button variant="outlined" onClick={() => navigate("/profile")}>
              Ver perfil
            </Button>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setShowLifecycle((visible) => !visible)}
            >
              {showLifecycle ? "Desmontar componente" : "Montar componente"}
            </Button>
          </Box>

          {showLifecycle && <LifecycleDemo />}
        </Paper>
      </Container>
    </>
  );
}

export default Home;
