import express from "express"
import cors from "cors"
import teelab from "./routes/TeeLab.routes.js"
import comandas from "./routes/comanda.routes.js"

const app = express();
const PORT = 3001;

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use("/api/camisetas", teelab);
app.use("/api/comandas", comandas);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});