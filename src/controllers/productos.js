const db = require("../db");
/*const productos = [
    {
        nombre: 'Raton',
        link: 'https://i.pinimg.com/236x/da/04/18/da04188f52cf14e3ab3f159d583e0d21.jpg',
        precio: '20$', 
        clase:'perro',
    },
    {
        nombre: 'Correas',
        link: 'https://i.pinimg.com/236x/5e/34/7f/5e347f6294f7fb353a377e9792a87988.jpg',   
        precio: '30$',
        clase:'perro',
    },
    {
        nombre: 'Cuchas',
        link: 'https://i.pinimg.com/236x/a6/64/ec/a664ec323750e48a6be9f9cf58039e84.jpg',
        precio: '30$',
        clase:'perro',
    },
    {
        nombre:'Pollera', 
        link : 'https://i.pinimg.com/236x/e5/bf/e1/e5bfe1cfa27a679c4fc9866778f537ff.jpg',   
        precio: '25$',
        clase:'perro',
    },
    
    {
        nombre:'Pretales',
        link: 'https://i.pinimg.com/236x/8f/7d/a6/8f7da6092777a362409cdc9a7e4f7710.jpg',   
        precio: '40$',
        clase:'perro',
    },
    
    {
        nombre:'Collares',
        link:'https://i.pinimg.com/236x/fd/d2/4f/fdd24fc60ee0d65a6d4ff50a8e30aa42.jpg',   
        precio: '20$',
        clase:'perro',
    },
    
    {
        nombre:'Capucha',
        link:'https://i.pinimg.com/236x/a1/cb/83/a1cb8345baeef69e6ca4353668e2834a.jpg',  
        precio: '40$',
        clase:'perro',
    },
    {
        nombre:'Mochilas',
        link:'https://i.pinimg.com/236x/5a/36/a7/5a36a7194f5a8bf4546870df10d912d9.jpg',   
        precio: '54$',
        clase:'perro',
    },
    {
        nombre: 'Set correa',
        link:'https://i.pinimg.com/236x/f7/5b/14/f75b14ab8a6927819a521cbb1e0b3199.jpg',
        precio: '60$',
        clase:'perro',
    },
    {
        nombre:'Iglu',
        link:'https://i.pinimg.com/236x/63/0b/e2/630be26b1be8fce7d3118159ee7ce056.jpg',
        precio:'23$',
        clase:'gato',
    },
    {
        nombre:'Botella',
        link:'https://i.pinimg.com/236x/ba/12/df/ba12df3fc5ac6f4b4a07795ec349fa78.jpg',
        precio: '42$',
        clase:'perro',
    },
    {
        nombre:'Mochi',
        link:'https://i.pinimg.com/236x/04/9a/6a/049a6ae5f5480552de6763a9469b8b05.jpg',
        precio: '50$',
        clase:'perro',
    },
    {
        nombre:'Gorra',
        link:'https://i.pinimg.com/236x/61/42/40/614240751cc06df14e0d5fc29ad50b74.jpg',
        precio: '34$',
        clase:'perro',
    },
    {
        nombre:'Riñonera',
        link:'https://i.pinimg.com/236x/12/7b/3d/127b3df33d621d53309c495adcbbdd57.jpg',
        precio: '34$',
        clase:'perro',
    },
    {
        nombre:'Bolso',
        link:'https://i.pinimg.com/236x/fd/f9/20/fdf920c205812d1eb4abe142f09df1ff.jpg',
        precio: '34$',
        clase:'perro',
    },
    {
        nombre:'Extencibles',
        link:'https://i.pinimg.com/236x/d2/fb/cf/d2fbcfa03241224a7cb2749b66c61821.jpg',
        precio: '34$',
        clase:'perro',
    },

    {
        nombre:'Cama',
        link:'https://i.pinimg.com/236x/8c/6e/81/8c6e81c3a156d3380353271cc3df50eb.jpg',
        precio: '45$',
        clase:'gato',
    },

    {
        nombre:'Arnes',
        link:'https://i.pinimg.com/236x/7b/c4/52/7bc45297e3648835c1d89e82e88709ba.jpg',
        precio: '30$',
        clase:'gato',
    },
 
    {
        nombre:'BuzoCapucha',
        link:'https://i.pinimg.com/236x/9e/10/85/9e10857908d8d84a1c500fa92c63ce45.jpg',
        precio:'28$',
        clase:'gato',
    },

    {
        nombre:'Funny',
        link:'https://i.pinimg.com/236x/64/01/5c/64015c94ccb5312ab64a9e2c3aa1d2df.jpg',
        precio:'24$',
        clase:'gato',
    },

    {
        nombre:'Reposera',
        link:'https://i.pinimg.com/236x/1b/34/5b/1b345b7225b0b684ec205211fef1de21.jpg',
        precio:'26$',
        clase:'gato',
    },

    {
        nombre:'CollarEle',
        link:'https://i.pinimg.com/236x/5b/8e/7e/5b8e7ed7d1ebc72bcb46b72985b7259f.jpg',
        precio:'18$',
        clase:'gato',
    },

    {
        nombre:'Whiskas',
        link:'https://i.pinimg.com/236x/32/6b/c0/326bc0fc8360efda8160a0e6b2ddd3ff.jpg',
        precio:'15$',
        clase:'gato',
    },

    {
        nombre:'FunnyDios',
        link:'https://i.pinimg.com/236x/a3/14/05/a314053de04e93b29a01c8bbd6367289.jpg',
        precio:'41$',
        clase:'perro',
    },

    {
        nombre:'Trasportadora',
        link:'https://i.pinimg.com/236x/19/7f/38/197f38c40313f830e1ba97702d693db4.jpg',
        precio:'40$',
        clase:'gato',
    },    
];
*/

const getProductos = async (req, res, next) => {
    try {
    const consulta = await db.query("Select * from  productos", []);
      return res.json({ messange: 'Lista de Productos', consulta: consulta.rows });
    } catch (error) {
      return next(error);
    }
  };
module.exports = getProductos;
  