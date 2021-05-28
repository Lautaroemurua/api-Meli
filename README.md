**Node JS API for MELI**

Aplicacion Node Js que expone 2 enpoints: ✌️

1️⃣ El primero: Devuelve una lista 📋  de :four: items a partir de la busqueda 🔍 de un termino coincidentes con un queryparams (cadena de texto) recibido.

Un objeto como este :

```json
{
  "author": {
    "name": "Lautaro Ezequiel",
    "lastname": "Murua"
  },
  "item": [
    {
      "id": "MLA869265149",
      "title": "Pelota De Futbol Nº 5 + Calidad 350 Gramos Cámara De Látex ",
      "price": {
        "currency": "ARS",
        "amount": 901,
        "decimals": "55"
      },
      "picture": "http://http2.mlstatic.com/D_647277-MLA42892938048_072020-O.jpg",
      "condition": "new",
      "free_shipping": false,
      "sold_quantity": 5000
    },
    {},
    {},
    {}
  ]
}
```

2️⃣ El segundo: devuelve la informacion de un item ☝️ en paritcular a partir de su id el cual se recibe por parametros. Por ejemplo:

```json
{
  "author": {
    "name": "Lautaro Ezequiel",
    "lastname": "Murua"
  },
  "item": {
    "id": "MLA860957095",
    "title": "Escopeta Con Mira Hawk Eye Rifle Pistola Dardos X Shot Nerf",
    "price": {
      "currency": "ARS",
      "amount": 2990,
      "decimals": "N"
    }
  },
  "picture": "http://http2.mlstatic.com/D_621942-MLA45479165335_042021-O.jpg",
  "condition": "new",
  "free_shipping": false,
  "sold_quantity": 250,
  "description": "Somos Jugueteria Toy Piola \nArma Lanza Dardos Simil ......"
}
```

Levantando el server... 🚀

Empezemos, para levantar el server en tu maquina local es necesario abrir un terminal 💻 en una ruta de su preferencia y tipear los siguiente comandos para realizar la clonacion: 
git clone https://github.com/Lautaroemurua/api-Meli.git

👀 Mira Deployment para conocer como desplegar el proyecto.

Pre-requisitos 📋 Para correr el server necesitas tener instalado:

🔴 Node JS : Servidor basado en el lenguaje de programación JavaScript

Ejemplo de instalación 🔩🔧

Descargalo de acá 👉 https://nodejs.org/es/download/

Te recomiendo bajar la LTS que es la version STABLE 😏 que este disponible en tu plataforma: 💻

Ejecutando las pruebas ⚙️ En desarrollo ... 🔧 🔩

Analice las pruebas end-to-end 🔩 En desarrollo ... 📚

Despliegue 📦: el server se desplegara en el puerto 3002, url ✒️ http://localhost:3002

Para correr el proyecto es necesario abrir un terminal en la raiz y escribir los suiguientes comandos:

:one: npm i

:two: npm run start



Construido con: 🛠️

Visual Code - IDE de desarrollo

Express JS - El framework para la capa de aplicacion utilizado

NPM - Manejador de dependencias 

CLEAN ARCHITECTURE - Patron de arquitectura implementado 


Autor ✒️ **Lautaro Ezequiel Murua** - Desarrollo - Investigacion  - Documentación

Espero que lo puedas instalar sin problemas muchas gracias 🎁 🍺 🤓.
