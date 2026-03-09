// ========== CLASES DE ARMAS ==========

class Espada {
  constructor() {
    this.nombre = "Espada";
    this.danio = 15;
  }

  atacar() {
    return this.danio;
  }

  toString() {
    return `${this.nombre} (${this.danio} de daño)`;
  }
}

class Hacha {
  constructor() {
    this.nombre = "Hacha";
    this.danio = 20;
  }

  atacar() {
    return this.danio;
  }

  toString() {
    return `${this.nombre} (${this.danio} de daño)`;
  }
}

class BastonMagico {
  constructor() {
    this.nombre = "Bastón Mágico";
    this.danio = 25;
  }

  atacar() {
    return this.danio;
  }

  toString() {
    return `${this.nombre} (${this.danio} de daño)`;
  }
}

class SinArma {
  constructor() {
    this.nombre = "Sin Arma";
    this.danio = 5;
  }

  atacar() {
    return this.danio;
  }

  toString() {
    return `${this.nombre} (${this.danio} de daño)`;
  }
}

// ========== CLASE BASE PERSONAJE ==========

class Personaje {
  #nombre;
  #nivel;
  #puntosDeVida;
  #arma;

  constructor(nombre, nivel, puntosDeVida, arma = new SinArma()) {
    if (new.target === Personaje) {
      throw new Error("Personaje es una clase abstracta");
    }
    this.#nombre = nombre;
    this.#nivel = nivel;
    this.#puntosDeVida = puntosDeVida;
    this.#arma = arma;
  }

  get nombre() {
    return this.#nombre;
  }

  get nivel() {
    return this.#nivel;
  }

  get puntosDeVida() {
    return this.#puntosDeVida;
  }

  get arma() {
    return this.#arma;
  }

  atacar() {
    const danioArma = this.#arma.atacar();
    return `${this.#nombre} ataca con ${this.#arma.nombre} causando ${danioArma} puntos de daño`;
  }

  equiparArma(arma) {
    this.#arma = arma;
    return `${this.#nombre} ha equipado: ${arma.nombre}`;
  }

  toString() {
    return `${this.constructor.name} ${this.#nombre} - Nivel: ${this.#nivel}, Vida: ${this.#puntosDeVida}, Arma: ${this.#arma.nombre}`;
  }

  valueOf() {
    return this.#nivel;
  }
}

// ========== SUBCLASES ==========

class Guerrero extends Personaje {
  #fuerza;

  constructor(nombre, nivel, puntosDeVida, arma, fuerza = 50) {
    super(nombre, nivel, puntosDeVida, arma);
    this.#fuerza = fuerza;
  }

  get fuerza() {
    return this.#fuerza;
  }

  golpeEspada() {
    const danioBase = this.arma.atacar();
    const danioTotal = danioBase + (this.#fuerza * 0.5);
    return `¡${this.nombre} realiza un golpe de espada devastador! Daño total: ${danioTotal.toFixed(0)}`;
  }

  atacar() {
    return super.atacar() + ` (Fuerza: ${this.#fuerza})`;
  }
}

class Mago extends Personaje {
  #mana;

  constructor(nombre, nivel, puntosDeVida, arma, mana = 100) {
    super(nombre, nivel, puntosDeVida, arma);
    this.#mana = mana;
  }

  get mana() {
    return this.#mana;
  }

  lanzarHechizo() {
    if (this.#mana >= 20) {
      this.#mana -= 20;
      const danioMagico = 30 + (this.nivel * 2);
      return `${this.nombre} lanza un hechizo de fuego! Daño: ${danioMagico}, Mana restante: ${this.#mana}`;
    }
    return `${this.nombre} no tiene suficiente mana`;
  }

  atacar() {
    return super.atacar() + ` (Mana: ${this.#mana})`;
  }
}

// ========== CLASE COFRE ==========

class Cofre {
  #armas;

  constructor() {
    this.#armas = [
      new Espada(),
      new Hacha(),
      new BastonMagico(),
      new Espada(),
      new BastonMagico()
    ];
  }

  mostrarArmas() {
    console.log("=== Armas disponibles en el cofre ===");
    this.#armas.forEach((arma, index) => {
      console.log(`${index + 1}. ${arma.toString()}`);
    });
  }

  recogerArma(personaje, nombreArma) {
    const armaIndex = this.#armas.findIndex(a => a.nombre === nombreArma);
    
    if (armaIndex === -1) {
      return `No se encontró ${nombreArma} en el cofre`;
    }

    const arma = this.#armas.splice(armaIndex, 1)[0];
    return personaje.equiparArma(arma);
  }
}

// ========== EJECUCIÓN DEL EJERCICIO ==========

console.log("=== CREACIÓN DE PERSONAJES ===\n");

// Crear personajes
const guerrero1 = new Guerrero("Thorin", 5, 150, new SinArma(), 70);
const guerrero2 = new Guerrero("Aragorn", 8, 180, new SinArma(), 85);
const mago1 = new Mago("Gandalf", 10, 100, new SinArma(), 150);
const mago2 = new Mago("Merlin", 7, 90, new SinArma(), 120);

// Crear cofre con armas
const cofre = new Cofre();

// Array de todos los personajes
const personajes = [guerrero1, guerrero2, mago1, mago2];

console.log("Personajes iniciales:");
personajes.forEach(p => console.log(p.toString()));

console.log("\n");
cofre.mostrarArmas();

// Los personajes recogen armas del cofre
console.log("\n=== RECOGIENDO ARMAS ===\n");
console.log(cofre.recogerArma(guerrero1, "Espada"));
console.log(cofre.recogerArma(guerrero2, "Hacha"));
console.log(cofre.recogerArma(mago1, "Bastón Mágico"));
console.log(cofre.recogerArma(mago2, "Bastón Mágico"));

// Mostrar personajes equipados
console.log("\n=== PERSONAJES EQUIPADOS ===\n");
personajes.forEach(p => console.log(p.toString()));

// Probar ataques
console.log("\n=== ATAQUES ===\n");
personajes.forEach(p => {
  console.log(p.atacar());
  if (p instanceof Guerrero) {
    console.log(p.golpeEspada());
  } else if (p instanceof Mago) {
    console.log(p.lanzarHechizo());
  }
  console.log();
});

// Ordenar por nivel
personajes.sort((a, b) => a.valueOf() - b.valueOf());

console.log("=== PERSONAJES ORDENADOS POR NIVEL ===\n");
personajes.forEach(p => console.log(p.toString()));