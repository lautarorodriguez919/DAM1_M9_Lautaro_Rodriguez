import camisetas from "../data/productos.js"

let comandas = []

export const crearComanda = (body) => {
    const numero = (comandas.length + 1).toString().padStart(4,"0")
    const id = `ORD-${numero}`
    const items = body.items.map(item =>{
        const camiseta = camisetas.find(c => c.id === item.camisetaId)
        const subtotal = camiseta.precioBase * item.cantidad
        return{
            camisetaId: item.camisetaId,
            nombre: camiseta.nombre,
            talla: item.talla,
            color: item.color,
            cantidad: item.cantidad,
            precioUnitario: camiseta.precioBase,
            subtotal
        }
    })
    const total = items.reduce((acc,item) => acc + item.subtotal,0)
    
    const comanda = {
    id,
    fecha: new Date().toISOString(),
    estado: "recibida",
    items,
    total
}
    comandas.push(comanda)
    return comanda
}

export const getAllComandas = () => comandas

export const getComandasById = (id) => comandas.find(c => c.id === id)

