class FiguraGeometrica {
  #nombre;

  constructor(nombre) {
    if (new.target === FiguraGeometrica) {
      throw new Error("FiguraGeometrica es una clase abstracta y no puede ser instanciada directamente");
    }
    this.#nombre = nombre;
  }

  get nombre() {
    return this.#nombre;
  }

  calcularArea() {
    throw new Error("El método calcularArea() debe ser implementado por las subclases");
  }

  toString() {
    return `${this.#nombre} con área de ${this.calcularArea().toFixed(2)} unidades²`;
  }

  valueOf() {
    return this.calcularArea();
  }
}

class Rectangulo extends FiguraGeometrica {
  #base;
  #altura;

  constructor(base, altura) {
    super("Rectángulo");
    this.#base = base;
    this.#altura = altura;
  }

  calcularArea() {
    return this.#base * this.#altura;
  }

  get dimensiones() {
    return `${this.#base} x ${this.#altura}`;
  }
}

class Triangulo extends FiguraGeometrica {
  #base;
  #altura;

  constructor(base, altura) {
    super("Triángulo");
    this.#base = base;
    this.#altura = altura;
  }

  calcularArea() {
    return (this.#base * this.#altura) / 2;
  }

  get dimensiones() {
    return `base: ${this.#base}, altura: ${this.#altura}`;
  }
}

class Circulo extends FiguraGeometrica {
  #radio;

  constructor(radio) {
    super("Círculo");
    this.#radio = radio;
  }

  calcularArea() {
    return Math.PI * this.#radio ** 2;
  }

  get radio() {
    return this.#radio;
  }
}

// Crear varias figuras
const rectangulo1 = new Rectangulo(5, 10);
const rectangulo2 = new Rectangulo(3, 7);
const triangulo1 = new Triangulo(6, 8);
const triangulo2 = new Triangulo(4, 5);
const circulo1 = new Circulo(5);
const circulo2 = new Circulo(3);

// Array de figuras
const figuras = [rectangulo1, rectangulo2, triangulo1, triangulo2, circulo1, circulo2];

console.log("=== FIGURAS GEOMÉTRICAS ===");
figuras.forEach(figura => {
  console.log(figura.toString());
});

// Ordenar por área (de menor a mayor)
figuras.sort((a, b) => a.valueOf() - b.valueOf());

console.log("\n=== FIGURAS ORDENADAS POR ÁREA ===");
figuras.forEach(figura => {
  console.log(figura.toString());
});