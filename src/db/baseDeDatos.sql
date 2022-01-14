drop database Bunker

create database Bunker

create table productos(
id Bigserial not null primary key,
nombre varchar not null,
precio varchar not null,
link varchar not null,
clase varchar not null
);

create table usuarios(
id Bigserial not null primary key,
nombre varchar not null,
mail varchar not null,
pass varchar not null
);


insert into productos (nombre, precio, link, clase)
values ('Raton','20$','https://i.pinimg.com/236x/da/04/18/da04188f52cf14e3ab3f159d583e0d21.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Correas','30$','https://i.pinimg.com/236x/5e/34/7f/5e347f6294f7fb353a377e9792a87988.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Cuchas','30$','https://i.pinimg.com/236x/a6/64/ec/a664ec323750e48a6be9f9cf58039e84.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Pollera','25$','https://i.pinimg.com/236x/e5/bf/e1/e5bfe1cfa27a679c4fc9866778f537ff.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Pretales','40$','https://i.pinimg.com/236x/8f/7d/a6/8f7da6092777a362409cdc9a7e4f7710.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Collares','20$','https://i.pinimg.com/236x/fd/d2/4f/fdd24fc60ee0d65a6d4ff50a8e30aa42.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Capucha','40$','https://i.pinimg.com/236x/a1/cb/83/a1cb8345baeef69e6ca4353668e2834a.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Mochilas','54$','https://i.pinimg.com/236x/5a/36/a7/5a36a7194f5a8bf4546870df10d912d9.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Set correa','60$','https://i.pinimg.com/236x/f7/5b/14/f75b14ab8a6927819a521cbb1e0b3199.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Iglu','23$','https://i.pinimg.com/236x/63/0b/e2/630be26b1be8fce7d3118159ee7ce056.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Camita','23$','https://i.pinimg.com/236x/eb/b8/a7/ebb8a75369cc7ee23c7f75b72aeff97b.jpg','gato');

insert into productos (nombre, precio, link, clase)
values ('Botella','42$','https://i.pinimg.com/236x/ba/12/df/ba12df3fc5ac6f4b4a07795ec349fa78.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Mochi','50$','https://i.pinimg.com/236x/04/9a/6a/049a6ae5f5480552de6763a9469b8b05.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Gorra','34$','https://i.pinimg.com/236x/61/42/40/614240751cc06df14e0d5fc29ad50b74.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Riñonera','34$','https://i.pinimg.com/236x/12/7b/3d/127b3df33d621d53309c495adcbbdd57.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Bolso','34$','https://i.pinimg.com/236x/fd/f9/20/fdf920c205812d1eb4abe142f09df1ff.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Extencibles','34$','https://i.pinimg.com/236x/d2/fb/cf/d2fbcfa03241224a7cb2749b66c61821.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('FunnyDios','41$','https://i.pinimg.com/236x/a3/14/05/a314053de04e93b29a01c8bbd6367289.jpg','perro');

insert into productos (nombre, precio, link, clase)
values ('Trasportadora','40$','https://i.pinimg.com/236x/19/7f/38/197f38c40313f830e1ba97702d693db4.jpg','gato');
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
insert into productos (nombre, precio, link, clase)
values ('Nutribon','45$','https://i.pinimg.com/236x/9e/d1/30/9ed1305cce2a0894707d91e8a9b20dbb.jpg','gato');

insert into productos (nombre, precio, link, clase)
values ('ScienceDiet','65$','https://i.pinimg.com/236x/82/ef/6f/82ef6ff8e21fbad02c830973ad1c66a2.jpg','gato');

insert into productos (nombre, precio, link, clase)
values ('Faro','12$','https://i.pinimg.com/236x/13/e0/e6/13e0e6835b99113723cd7941eb34aee0.jpg','gato');

insert into productos (nombre, precio, link, clase)
values ('Equilibrio','32$','https://i.pinimg.com/236x/c3/c7/f0/c3c7f02c8ce2b5d02217ca15f73eb48e.jpg','gato');

insert into productos (nombre, precio, link, clase)
values ('Pedigree','33$','https://i.pinimg.com/236x/21/49/31/214931eb30dac6ab3b5d383896558a3e.jpg','gato');

--------------------------------------------------------------------------------------------------
insert into usuarios (nombre, mail, pass)
values ('gabriel','guebe@gmail.com','1234');

insert into usuarios (nombre, mail, pass)
values ('marla','marla@gmail.com','5555');

insert into usuarios (nombre, mail, pass)
values ('margarita','margarita@gmail.com','1111');

---------------------------------------------------------------------------------------------------
select * from usuarios 
select * from productos

DELETE FROM public.productos
WHERE id=;
