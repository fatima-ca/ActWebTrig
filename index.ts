import express from 'express';
import dataRoutes from './src/routes/data'
const app = express();
app.use(express.json());


app.use('/data', dataRoutes); //Tarea


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running ${PORT}`))