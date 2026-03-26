import {
  TextField,
  Button,
  Container,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={6} sx={{ padding: 4, width: "100%" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          <TextField label="Usuario" fullWidth margin="normal" />

          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => navigate("/home")}
          >
            Iniciar sesión
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;