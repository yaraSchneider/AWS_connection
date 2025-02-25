const express = require('express');
const uploadRoutes = require('./Routes/uploadRoutes');

const app = express();
app.use(express.json());

app.use('/api', uploadRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});