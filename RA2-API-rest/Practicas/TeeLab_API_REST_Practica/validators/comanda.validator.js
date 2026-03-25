
export const validarComanda = (body,camisetas)=>{
    if(!body.cliente?.nombre || body.cliente.nombre.length < 2){
        return "cliente.nombre obligatorio (mín. 2)"
    }
    if(!body.cliente?.email || !body.cliente.email.includes("@")){
        return "cliente.email obligatorio (formato básico)"
    }
    if(!body.items || body.items.length === 0){
        return "items debe existir y tener al menos 1 elemento"
    }
    if(body.items.some(item => item.cantidad < 1)){
        return "cantidad entero ≥ 1"
    }
    for (const item of body.items){
        const camiseta = camisetas.find(c=>c.id===item.camisetaId)
        if(!camiseta)return "camisetaId no existe en el catalogo"
        if(!camiseta.tallas.includes(item.talla))return "talla debe estar dentro de tallas de esa camiseta"
        if(!camiseta.colores.includes(item.color))return "color debe estar dentro de colores de esa camiseta"
    }

    return null
}