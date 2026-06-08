import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { authHeaders } from "../auth";
import { API_URL } from "../config";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users/${id}`, {
          headers: authHeaders(),
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.msg || "Error al obtener el usuario");
        }

        setUser(data);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [id]);

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Button component={RouterLink} to="/users" sx={{ mb: 2 }}>
          Volver a usuarios
        </Button>

        {loading && (
          <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && <Alert severity="error">{error}</Alert>}

        {user && (
          <Paper sx={{ p: 4 }}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar sx={{ width: 64, height: 64 }}>
                {(user.name || user.username).charAt(0).toUpperCase()}
              </Avatar>
              <Box>
                <Typography variant="h4">{user.name}</Typography>
                <Typography color="text.secondary">@{user.username}</Typography>
              </Box>
            </Box>

            <Typography sx={{ mt: 3 }}>
              Este detalle se cargó desde la URL dinámica:
            </Typography>
            <Typography component="code">/users/{id}</Typography>
          </Paper>
        )}
      </Container>
    </>
  );
}

export default UserDetail;
