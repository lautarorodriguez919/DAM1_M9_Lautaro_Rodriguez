import camisetas from "../data/productos.js"

export const getAllCamisetas = (filtros) =>{
    const {talla, color,tag,q,sort} = filtros
    let resultado = camisetas

    if (talla) resultado = resultado.filter(c => c.tallas.includes(talla))
    if (color) resultado = resultado.filter(c => c.colores.includes(color))
    if (tag) resultado = resultado.filter(c => c.tags.includes(tag))
    if (q) resultado = resultado.filter(c => c.nombre.toLowerCase().includes(q) || c.descripcion.toLowerCase().includes(q))
    if (sort == "precio_asc") resultado = resultado.sort(((a, b) => a.precioBase - b.precioBase))
    if (sort == "precio_desc") resultado = resultado.sort(((a, b) => b.precioBase - a.precioBase))
    if (sort == "nombre_asc") resultado = resultado.sort(((a, b) => a.nombre.localeCompare(b.nombre)))
    if (sort == "nombre_desc") resultado = resultado.sort(((a, b) => b.nombre.localeCompare(a.nombre)))
        
    return resultado
} 

export const getCamisetasById = (id) => camisetas.find(c => c.id === id)