import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUsers";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

function Users() {
  const { user: loggedUser } = useAuth();
  const {
    users,
    loading,
    error,
    setError,
    createUser,
    deleteUser,
  } = useUsers();
  const [form, setForm] = useState({ name: "", username: "", password: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      await createUser(form);
      setForm({ name: "", username: "", password: "" });
      setSuccess("Usuario agregado correctamente");
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  const handleDelete = async (id) => {
    setError("");
    setSuccess("");

    try {
      await deleteUser(id);
      setSuccess("Usuario eliminado correctamente");
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Usuarios
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        {loading && <CircularProgress sx={{ mb: 2 }} />}

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Agregar usuario
          </Typography>

          <Box component="form" onSubmit={handleSubmit} display="grid" gap={2}>
            <TextField
              label="Nombre"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Usuario"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <TextField
              label="Contraseña"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained">
              Guardar
            </Button>
          </Box>
        </Paper>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Usuario</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell align="right">
                    <Button
                      component={RouterLink}
                      to={`/users/${user._id}`}
                      sx={{ mr: 1 }}
                    >
                      Ver detalle
                    </Button>
                    <Button color="error" variant="outlined" disabled={loggedUser?._id === user._id} onClick={() => handleDelete(user._id)}>
                      {loggedUser?._id === user._id ? "Sesión actual" : "ELIMINAR"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {users.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No hay usuarios registrados
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Users;
