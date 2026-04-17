import express from "express"
import cors from "cors"
import teelab from "./routes/TeeLab.routes.js"
import comandas from "./routes/comanda.routes.js"

const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://127.0.0.1:5500' })); // ← solo permite peticiones desde este origen
app.use(express.json());                              // ← parsea el body como JSON automáticamente
app.use((req, res, next) => {                         // ← middleware de log, imprime cada petición
    console.log(req.method, req.url);
    next();
});

app.use("/api/camisetas", teelab);    // ← todas las rutas de camisetas empiezan por /api/camisetas
app.use("/api/comandas", comandas);   // ← todas las rutas de comandas empiezan por /api/comandas

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});