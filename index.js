'use strict'

const PLAZO_MAXIMO = 90

const moment = require('moment')

const origen = moment('2019-01-01 20:21:31')
console.log('origen', origen.calendar())

// No se toma `origen` para aplicar el `add()`
// Ya que modifica el objeto original en lugar de retornar uno nuevo
const maxEspera = moment('2019-01-01 20:21:31').add(PLAZO_MAXIMO, 'days')
console.log('maxEspera', maxEspera.calendar())

const hoy = moment('2019-03-01 13:03:22')
console.log('hoy', hoy.calendar())

const restantes = maxEspera.diff(hoy, 'days')
console.log('restantes', restantes)

const after = hoy.isAfter(origen)
console.log('hoy isAfter origen?', after)

if (restantes >= 0) {
  console.log('Aún se puede efectuar la compra')
} else {
  console.log('Nel prro ALV')
}
