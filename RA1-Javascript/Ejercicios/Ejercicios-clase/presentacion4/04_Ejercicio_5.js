const usuarios = [
    {
        nombre: "Lautaro",
        edad: 25,
        email: "lautaro@email.com",
        saludar: function() {
            console.log(`Hola, mi nombre es ${this.nombre}`);
        }
    },
    {
        nombre: "Lau",
        edad: 30,
        email: "lau@email.com",
        saludar: function() {
            console.log(`Hola, mi nombre es ${this.nombre}`);
        }
    },
    {
        nombre: "Daniel",
        edad: 28,
        email: "dani@email.com",
        saludar: function() {
            console.log(`Hola, mi nombre es ${this.nombre}`);
        }
    }
];

//AÑADIR NUEVO USUARIO CON PUSH
usuarios.push({
    nombre: "Alma",
    edad: 22,
    email: "alma@email.com",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
});

//FUNCIÓN MOSTRAR USUARIOS
function mostrarUsuarios() {
    console.log("--- LISTA DE USUARIOS ---");
    for (let usuario of usuarios) {
        console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`);
    }
}

// VERIFICACIÓN
mostrarUsuarios();
console.log("\n--- PROBANDO EL MÉTODO SALUDAR ---");
usuarios.forEach(usuario => {
    usuario.saludar();
});