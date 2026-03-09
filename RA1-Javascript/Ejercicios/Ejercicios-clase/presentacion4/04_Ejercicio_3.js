const tvSamsung = {
    nombre: "TV Samsung 42”",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95,
    
    getImporte: function() {
        return this.unidades * this.precio;
    }
};

//Ejercicio 1
alert("Vamos a añadir características nuevas a la TV.");
do {
    let nombrePropiedad = prompt("Escribe el nombre de la propiedad:");
    if (nombrePropiedad) {
        let valorPropiedad = prompt(`¿Qué valor tiene '${nombrePropiedad}'?`);
        tvSamsung[nombrePropiedad] = valorPropiedad;
    }
} while (confirm("¿Quieres añadir otra característica?"));

//Ejercicio 2
        const propiedadesIdeales = ["resolucion", "hdmi", "smart_tv", "peso", "garantia"];

        for (let i = 0; i < propiedadesIdeales.length; i++) {
            let propiedad = propiedadesIdeales[i];

            if (!(propiedad in tvSamsung)) {
                tvSamsung[propiedad] = "default value";
            }
        }

//Ejercicio 3
        let htmlContenido = "<ul>";
        for (let clave in tvSamsung) {
            let valor = tvSamsung[clave];

            if (typeof valor === 'function') {
                htmlContenido += `<li><b>${clave}:</b> [Método]</li>`;
            } else {
                htmlContenido += `<li><b>${clave}:</b> ${valor}</li>`;
            }
        }
        
        htmlContenido += "</ul>";
        document.getElementById("resultado").innerHTML = htmlContenido;
        console.log("Objeto final:", tvSamsung);