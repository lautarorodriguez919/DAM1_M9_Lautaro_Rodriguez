import * as ServicioTienda from "../services/TiendaTeeLab.js"

// TeeLabController.js
export const getAll = (req, res) => {
    const validar = ["precio_asc", "precio_desc", "nombre_asc", "nombre_desc"]
    if(req.query.sort && !validar.includes(req.query.sort)){
        return res.status(400).json({error:"sort no reconocido"}) // ← valida query params
    }
    const data = ServicioTienda.getAllCamisetas(req.query) // ← pasa los filtros al service
    res.json(data)
}

export const getById = (req, res) => {
    const camiseta = ServicioTienda.getCamisetasById(req.params.id) // ← extrae :id de la URL
    if(!camiseta) return res.status(404).json({error:"camiseta no encontrada"}) // ← control 404
    res.json(camiseta)
}