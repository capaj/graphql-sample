const Lokka = require('lokka').Lokka
const Transport = require('lokka-transport-http').Transport

const client = new Lokka({
  transport: new Transport('http://localhost:4000/graphql')
})

client.query(`{pok: rollDice(numDice: 3, numSides: 6)}`).then(result => {
  console.log(result)
})
