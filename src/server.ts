import express from 'express';
import pool from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});