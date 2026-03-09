alert("¡Bienvenido a mi página!")
let respuesta = confirm("¿Te gustaría continuar?");
let nombre = prompt("indicame tu nombre: ");
respuesta == true ? nombre : console.log("hasta luego");
nombre != null ? console.log("bienvenido " + nombre) : console.log("no estas registrado")
