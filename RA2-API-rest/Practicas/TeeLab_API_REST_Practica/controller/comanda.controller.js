import * as ComandaService from "../services/comanda.service.js"
import {validarComanda} from "../validators/comanda.validator.js"
import camisetas from "../data/productos.js"

export const postComanda = (req,res) =>{
      const error = validarComanda(req.body, camisetas)
      if(error) return res.status(400).json({error})
      const comanda = ComandaService.crearComanda(req.body)
      res.status(201).json(comanda)
}

export const getAllComandas = (req,res) =>{
      const data = ComandaService.getAllComandas()
      res.json(data)
}

export const getComandaById = (req,res) =>{
      const comanda = ComandaService.getComandasById(req.params.id)
      if (!comanda) return res.status(404).json({error: "Comanda no encontrada"})
      res.json(comanda)
}