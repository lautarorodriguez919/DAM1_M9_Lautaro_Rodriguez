import express from "express";
import studentsRouter from './routes/students.routes.js';

const app = express();
const PORT = 3001;

app.use(express.json);

app.use((req,res,next) => {
    console.log(req.method, req.url);
    next();
});
app.use("/students", studentsRouter);

app.use((err,res,next) => {
    console.error(err.message);
    res.status(500).json({message: "Error interno"});
});
app.listen( PORT,() =>{
    console.log(`Servidor correindo en local:${PORT}`);
});