import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Vercel!');
});

// O Vercel espera que a instância do Express seja EXPORTADA
export default app;