import * as ServicioTienda from "../services/TiendaTeeLab.js"

export const getAll = (req,res)=>{
    const validar = ["precio_asc", "precio_desc", "nombre_asc", "nombre_desc"]
    if(req.query.sort && !validar.includes(req.query.sort)){
        return res.status(400).json({error:"sort no reconocido"})
    }
    const data = ServicioTienda.getAllCamisetas(req.query)
    res.json(data)
}

export const getById = (req,res)=>{
    const camiseta = ServicioTienda.getCamisetasById(req.params.id)
    if(!camiseta){
        return res.status(404).json({error:"camiseta no encontrada"})
    }
    res.json(camiseta)
}