// las APIS se comunican por servicio no desde el controlador
// nos ha dicho no se que de escalabilidad, supongo que sera algo de que al comunicarse conservicio no se modifica desde la base de datos del consultado
// desde el controlador solo se hacen las consultas a los metodos

import express from "express"
import teelab from "./routes/TeeLab.routes.js"
import comandas from "./routes/comanda.routes.js"

const app = express();
const PORT = 3001;  

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.method,req.url);
    next();
})

app.use("/api/camisetas", teelab)
app.use("/api/comandas", comandas)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})