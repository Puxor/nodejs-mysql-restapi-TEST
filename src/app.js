import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/inde.routes.js';




const app = express();


// Usa las rutas
app.use(express.json());
app.use('/api', indexRoutes);
app.use('/api',employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
});

export default app;