import Navbar from "../components/Navbar";
import { Container, Typography, Paper } from "@mui/material";

function Home() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h4">
            Bienvenido a Home
          </Typography>
        </Paper>
      </Container>
    </>
  );
}

export default Home;