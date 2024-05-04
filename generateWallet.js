const { ethers } = require('ethers');

// Generar una nueva billetera
const wallet = ethers.Wallet.createRandom();

// Obtener la clave privada de la billetera
const privateKey = wallet.privateKey;

console.log('Clave privada generada:', privateKey);

