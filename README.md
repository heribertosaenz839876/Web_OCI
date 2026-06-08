# Web OCI

Frontend en React conectado con la REST API de `Api_OCI`.

## Práctica React URL + Hooks + LifeCycle

- URL dinámica: desde la lista de `/users` se puede abrir el detalle de cada
  usuario en `/users/:id`.
- Hook personalizado `useAuth`: centraliza el usuario, token, estado de
  autenticación y cierre de sesión.
- Hook personalizado `useUsers`: centraliza la consulta, creación y eliminación
  de usuarios.
- Componente `LifecycleDemo`: imprime en la consola cuando se monta, actualiza y
  desmonta. Se encuentra en la pantalla Home.

## Ejecución

1. Levantar el proyecto `Api_OCI`.
2. Crear `.env` a partir de `.env.example` si la API no usa
   `http://localhost:3000`.
3. Ejecutar `npm install`.
4. Ejecutar `npm run dev`.
