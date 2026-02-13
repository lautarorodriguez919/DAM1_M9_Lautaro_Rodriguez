class TarjetaCredito {
  // Propiedades privadas
  #numero;
  #cvv;
  #pin;
  #saldo;
  #activa;

  // Propiedades públicas
  titular;
  fechaExpiracion;
  limite;

  constructor(titular, numero, cvv, pin, fechaExpiracion, limite = 5000) {
    this.titular = titular;
    this.#numero = numero;
    this.#cvv = cvv;
    this.#pin = pin;
    this.fechaExpiracion = fechaExpiracion;
    this.limite = limite;
    this.#saldo = 0;
    this.#activa = false;
  }

  // Getters y setters para propiedades privadas
  get numeroOculto() {
    return `**** **** **** ${this.#numero.slice(-4)}`;
  }

  get saldo() {
    return this.#saldo;
  }

  get estaActiva() {
    return this.#activa;
  }

  // Métodos de comportamiento
  activar(pin) {
    if (this.#validarPin(pin)) {
      this.#activa = true;
      return "Tarjeta activada correctamente";
    }
    return "PIN incorrecto";
  }

  anular(pin) {
    if (this.#validarPin(pin)) {
      this.#activa = false;
      return "Tarjeta anulada";
    }
    return "PIN incorrecto";
  }

  pagar(cantidad, pin) {
    if (!this.#activa) {
      return "La tarjeta no está activa";
    }
    if (!this.#validarPin(pin)) {
      return "PIN incorrecto";
    }
    if (this.#saldo + cantidad > this.limite) {
      return "Límite de crédito excedido";
    }
    this.#saldo += cantidad;
    return `Pago de ${cantidad}€ realizado. Saldo actual: ${this.#saldo}€`;
  }

  cambiarPin(pinAntiguo, pinNuevo) {
    if (this.#validarPin(pinAntiguo)) {
      this.#pin = pinNuevo;
      return "PIN cambiado correctamente";
    }
    return "PIN incorrecto";
  }

  #validarPin(pin) {
    return this.#pin === pin;
  }

  toString() {
    return `Tarjeta de ${this.titular} - ${this.numeroOculto}`;
  }
}

// Instanciar 3 objetos diferentes
const tarjeta1 = new TarjetaCredito("Ana García", "1234567812345678", "123", "1234", "12/28", 3000);
const tarjeta2 = new TarjetaCredito("Carlos López", "8765432187654321", "456", "5678", "06/27", 5000);
const tarjeta3 = new TarjetaCredito("María Rodríguez", "1111222233334444", "789", "9012", "03/29", 10000);

// Probar funcionalidad
console.log(tarjeta1.toString());
console.log(tarjeta1.activar("1234"));
console.log(tarjeta1.pagar(500, "1234"));
console.log(tarjeta1.cambiarPin("1234", "4321"));
console.log(tarjeta1.pagar(200, "4321"));

console.log("\n" + tarjeta2.toString());
console.log(tarjeta2.pagar(100, "5678")); // No está activa
console.log(tarjeta2.activar("5678"));
console.log(tarjeta2.pagar(1500, "5678"));

console.log("\n" + tarjeta3.toString());
console.log(tarjeta3.activar("9012"));
console.log(tarjeta3.pagar(15000, "9012")); // Excede límite