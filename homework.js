// No cambies los nombres de las funciones.

function usarOperadorTernario(edad) {
  // Devuelve "mayor" si edad >= 18, y "menor" en caso contrario.
  // Tu codigo:
  let resultado = edad >= 18 ? 'mayor' : 'menor';
  return resultado;
}

function leerModuloCommonJS() {
  // Importa datos desde "./modulos/constantes-cjs.cjs" usando require.
  // Devuelve un string con el formato: "<nombreMotor> <versionObjetivo>"
  // Tu codigo:
  let datos = require('./modulos/constantes-cjs.cjs')
  let resultado = datos.nombreMotor + ' ' + datos.versionObjetivo;
  return resultado;
}

async function leerModuloESM() {
  // Importa datos desde "./modulos/constantes-esm.mjs" usando import dinamico.
  // Devuelve un string con el formato: "<standardModulo> | <sintaxisImport>"
  // Tu codigo:
  let datos = await import('./modulos/constantes-esm.mjs');
  let resultado = datos.standardModulo + ' | ' + datos.sintaxisImport;
  return resultado;
}

function combinarArraysConSpread(base, extras) {
  // Devuelve un nuevo array con todos los elementos de base seguidos por extras.
  // Tu codigo:
  let resultado = [...base, ...extras];
  return resultado;
}

function combinarObjetosConSpread(base, override) {
  // Devuelve un nuevo objeto donde "override" pisa las claves repetidas de "base".
  // Tu codigo:
  let resultado = { ...base, ...override };
  return resultado;
}

function recolectarNotas(materia, ...notas) {
  // Rest parameter: devuelve un objeto con la materia y el array de notas.
  // Tu codigo:
  let resultado = { materia: materia, notas: notas };
  return resultado;
}

function obtenerPreferenciaColor(usuario) {
  // Usa optional chaining y nullish coalescing.
  // Si usuario.preferencias.color existe, devolvelo.
  // Caso contrario devolve "sin-preferencia".
  // Tu codigo:
  let color = usuario?.preferencias?.color ?? 'sin-preferencia';
  return color;
}

function desestructurarPerfil(perfil) {
  // Extrae con alias:
  // - nombre -> nombrePersona
  // - edad -> edadPersona
  // - ciudad desde perfil.direccion.ciudad -> ciudadActual
  // Devuelve { nombrePersona, edadPersona, ciudadActual }.
  // Tu codigo:
  let { nombre: nombrePersona, edad: edadPersona, direccion: { ciudad: ciudadActual } } = perfil;
  return { nombrePersona, edadPersona, ciudadActual };
}

class Persona {
  constructor(nombre, edad) {
    // Tu codigo:
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    // Devuelve: "Soy <nombre> y tengo <edad> anios."
    // Tu codigo:
    let presentacion = 'Soy ' + this.nombre + ' y tengo ' + this.edad + ' anios.';
    return presentacion;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    // Tu codigo:
    super(nombre, edad);
    this.carrera = carrera;
  }

  presentarse() {
    // Usa super.presentarse() y agrega:
    // " Estudio <carrera>."
    // Tu codigo:
    let base = super.presentarse();
    let resultado = base + ' Estudio ' + this.carrera + '.';
    return resultado;
  }
}

function diasEntreFechas(fechaInicio, fechaFin) {
  // Recibe dos objetos Date y devuelve la diferencia entera en dias.
  // Tu codigo:
  let diferenciaMilisegundos = fechaFin - fechaInicio;
  let milisegundosPorDia = 1000 * 60 * 60 * 24;
  let dias = Math.floor(diferenciaMilisegundos / milisegundosPorDia);
  return dias;
}

function explicarConcurrenciaYParalelismo() {
  // Devuelve un objeto:
  // {
  //   concurrencia: "...",
  //   paralelismo: "..."
  // }
  // Tu codigo:
  let resultado = {
    concurrencia: 'Multiples tareas progresan en periodos superpuestos, intercaladas en el tiempo en un solo hilo.',
    paralelismo: 'Multiples tareas se ejecutan literalmente al mismo tiempo, en distintos nucleos o workers.'
  };
  return resultado;
}

function promesaDemorada(valor, ms) {
  // Devuelve una Promise que resuelve "valor" despues de "ms" milisegundos.
  // Tu codigo:
  let promesa = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(valor);
    }, ms);
  });
  return promesa;
}

function promesaConValidacion(numero) {
  // Devuelve una Promise:
  // - resolve: "ok:<numero>" si numero es >= 0
  // - reject: Error("numero-invalido") si numero < 0
  // Tu codigo:
  let promesa = new Promise(function (resolve, reject) {
    if (numero >= 0) {
      resolve('ok:' + numero);
    } else {
      reject(new Error('numero-invalido'));
    }
  });
  return promesa;
}

module.exports = {
  usarOperadorTernario,
  leerModuloCommonJS,
  leerModuloESM,
  combinarArraysConSpread,
  combinarObjetosConSpread,
  recolectarNotas,
  obtenerPreferenciaColor,
  desestructurarPerfil,
  Persona,
  Estudiante,
  diasEntreFechas,
  explicarConcurrenciaYParalelismo,
  promesaDemorada,
  promesaConValidacion,
};
