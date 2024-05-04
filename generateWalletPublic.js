const { ethers } = require('ethers');

const privateKey = '0xec3a5cedf72f609c909d3632eba0a495949d7de9f801655e035d48a944f94d02';

const wallet = new ethers.Wallet(privateKey);

// Obtener la dirección Ethereum de la clave pública
const address = wallet.address;
console.log('Dirección Ethereum generada:', address);