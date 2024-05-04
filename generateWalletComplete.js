//En este archivo se muestra cómo generar una billetera Ethereum completa, incluida la clave privada, la clave pública y la dirección Ethereum.
const { ethers } = require('ethers');

// Generar una nueva billetera
const wallet = ethers.Wallet.createRandom();

// Obtener la clave privada de la billetera
const privateKey = wallet.privateKey;
console.log('Clave privada generada:', privateKey);

// Derivar la clave pública de la clave privada
const publicKey = wallet.publicKey;
console.log('Clave pública derivada:', publicKey);

// Obtener la dirección Ethereum de la clave pública
const address = wallet.address;
console.log('Dirección Ethereum generada:', address);
