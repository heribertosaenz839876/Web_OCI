import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../auth";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    clearSession();
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          App React
        </Typography>

        <Button color="inherit" onClick={() => navigate("/home")}>
          Home
        </Button>

        <Button color="inherit" onClick={() => navigate("/users")}>
          Usuarios
        </Button>

        <Button color="inherit" onClick={() => navigate("/profile")}>
          Profile
        </Button>

        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
