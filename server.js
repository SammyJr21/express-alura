import app from './src/app.js';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor Iniciado em http://localhost:${port}`);
});
