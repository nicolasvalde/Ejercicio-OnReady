function Vehiculo(marca, modelo, precio) {
  this.marca = marca;
  this.modelo = modelo;
  this.precio = precio;
}

function Auto(marca, modelo, precio, puertas) {
  Vehiculo.call(this, marca, modelo, precio);
  this.puertas = puertas;
}

function Moto(marca, modelo, precio, cilindrada) {
  Vehiculo.call(this, marca, modelo, precio);
  this.cilindrada = cilindrada;
}

Auto.prototype = Object.create(Auto.prototype);

Moto.prototype = Object.create(Moto.prototype);

var vehiculos = [];

vehiculos.push(new Auto("Peugeot", "206", 200000.0, "4"));
vehiculos.push(new Moto("Honda", "Titan", 60000.0, "125c"));
vehiculos.push(new Auto("Peugeot", "208", 250000.0, "5"));
vehiculos.push(new Moto("Yamaha", "YBR", 80500.5, "160c"));

var precioFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "ARS",
  currencyDisplay: "narrowSymbol",
  minimumFractionDigits: 2,
});

for (var v of vehiculos) {
  if (v instanceof Auto) {
    console.log(`Marca: ${v.marca} // Modelo: ${v.modelo} // Puertas: ${v.puertas} // Precio: ${precioFormatter.format(v.precio)}`);
  } else {
    console.log(`Marca: ${v.marca} // Modelo: ${v.modelo} // Cilindrada: ${v.cilindrada} // Precio: ${precioFormatter.format(v.precio)}`);
  }
}

console.log("=============================");

vehiculos.sort((a, b) => (a.precio < b.precio ? 1 : -1));

console.log(`Vehículo más caro: ${vehiculos[0].marca} ${vehiculos[0].modelo}`);
console.log(`Vehículo más barato: ${vehiculos[vehiculos.length - 1].marca} ${vehiculos[vehiculos.length - 1].modelo}`);

var vehiculoY = vehiculos.find((v) => {
  return v.modelo.includes("Y");
});

console.log(
  `Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculoY.marca} ${vehiculoY.modelo} ${precioFormatter.format(vehiculoY.precio)}`
);

console.log(
  "=============================\nVehículos ordenados por precio de mayor a menor: "
);

for (var v of vehiculos) {
  console.log(v.marca, v.modelo);
}
