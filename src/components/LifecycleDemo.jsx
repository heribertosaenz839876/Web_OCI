import { useEffect, useRef, useState } from "react";
import { Button, Paper, Typography } from "@mui/material";

function LifecycleDemo() {
  const [updates, setUpdates] = useState(0);
  const firstRender = useRef(true);

  useEffect(() => {
    console.log("LifecycleDemo: componente montado");

    return () => {
      console.log("LifecycleDemo: componente desmontado");
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.log(`LifecycleDemo: componente actualizado (${updates})`);
  }, [updates]);

  return (
    <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Ciclo de vida del componente
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Abre la consola. Este componente registra cuando se monta, actualiza y desmonta.
      </Typography>
      <Button variant="contained" onClick={() => setUpdates((value) => value + 1)}>
        Actualizar componente ({updates})
      </Button>
    </Paper>
  );
}

export default LifecycleDemo;
