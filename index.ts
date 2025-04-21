import express from 'express';
import numRoutes from './src/routes/num'
const app = express();
app.use(express.json());


app.use('/num', numRoutes); //Tarea


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running ${PORT}`))