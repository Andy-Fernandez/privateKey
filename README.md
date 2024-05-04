Que me dirías si te digo que puedes crear una billetera electronica con 5 lineas de código y en la que puedas recibir de forma segura calquier canitadad de dinero de forma segura y sin dar ningún dato personal.

## Cómo Generar Claves Privadas de una Wallet con `ethers` e Importarlas en MetaMask

### **Introducción**
En el mundo de las criptomonedas, entender y manejar correctamente las claves privadas es fundamental para asegurar tus activos digitales. Este artículo ofrece una guía paso a paso sobre cómo generar una clave privada para Ethereum, configurar un proyecto Node.js y cómo importar tu billetera en MetaMask.


### **Preparación del entorno**
#### **Requisitos previos**
```bash
¡Importante! Antes de continuar, asegúrate de tener Node.js instalado en tu sistema.
```

#### **Configurar el proyecto e instalar ethers.js**
Una vez instalado Node.js, crea una nueva carpeta para tu proyecto y ejecuta `npm init -y` en una terminal para inicializar un nuevo proyecto de Node.js. Luego, instala la librería `ethers.js` usando el comando `npm install ethers`, que es esencial para trabajar con Ethereum.

![Captura de pantalla de la terminal con los comandos ejecutados](https://i.imgur.com/8vIa64O.png)

### **Generación de la clave privada**
#### **Explicación detallada del código**
Para generar una clave privada, utilizaremos `ethers.js`, que proporciona un método seguro y eficiente para crear billeteras y claves en Ethereum. El siguiente código en JavaScript te ayudará a crear una nueva clave:

```javascript
const { ethers } = require('ethers');

// Generar una nueva billetera
const wallet = ethers.Wallet.createRandom();

// Obtener la clave privada de la billetera
const privateKey = wallet.privateKey;

console.log('Clave privada generada:', privateKey);
```

Podedemos hacer un `nano generateWallet.js` y pegar el codigo anterior. (No olvides guardar el archivo con `Ctrl + O` y salir con `Ctrl + X`)

![Captura de pantalla de la terminal con el código de generación de clave privada](https://i.imgur.com/UarORb6.png)

#### **Instrucciones paso a paso**
Guarda el código en un archivo llamado `generateWallet.js`. Abre una terminal, navega hasta el directorio de tu proyecto y ejecuta el archivo con `node generateWallet.js`. Verás la clave privada generada en la consola.

![Captura de pantalla de la ejecución del script mostrando la clave privada en la consola](https://i.imgur.com/xTCPKrU.png)

### **Importar la billetera en MetaMask**
#### **Guía visual para abrir MetaMask y añadir la clave privada generada**
Para importar tu billetera en MetaMask, abre la extensión en tu navegador, selecciona "Importar cuenta" y pega la clave privada que generaste. Este proceso añadirá tu nueva billetera a MetaMask, permitiéndote gestionar tus criptomonedas de forma segura.

![Pasos visuales mostrando cómo importar la clave privada en MetaMask](https://i.imgur.com/eZgUfTm.png)

![Pegando la clave privada generada](https://i.imgur.com/j1dMqUr.png)

### **Consejos para mantener la seguridad**
- Nunca compartas tu clave privada.
- Utiliza siempre conexiones seguras.
- Considera el uso de una billetera de hardware para un almacenamiento más seguro.

### Bonus: **Generar la address a partir de la clave privada**

Para obtener la dirección Ethereum asociada a una clave privada, puedes utilizar el siguiente código en JavaScript:

```javascript
const { ethers } = require('ethers');

const privateKey = '0xec3a5cedf72f609c909d3632eba0a495949d7de9f801655e035d48a944f94d02';

const wallet = new ethers.Wallet(privateKey);

// Obtener la dirección Ethereum de la clave pública
const address = wallet.address;
console.log('Dirección Ethereum generada:', address);
```

Hacemos un `nano generateAddress.js` y pegamos el código anterior y al ejecutarlo con `node generateAddress.js` obtendremos la dirección Ethereum asociada a la clave privada.

Podemos verificar que la dirección generada es la misma que la que nos muestra MetaMask.

![Captura de pantalla de la terminal con el código de generación de dirección Ethereum y Metamas](https://i.imgur.com/cIB8rUG.png)

---
Te dejo el repositorio con los archivos generados en este tutorial: [Repositorio en GitHub](https://github.com/Andy-Fernandez/privateKey) donde encontrarás tambien otro archivo con la generación desde la llave privada -> calve publica -> dirección Ethereum directemente.
