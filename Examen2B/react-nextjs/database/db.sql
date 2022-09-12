CREATE DATABASE artistadb

CREATE TABLE artista(
    id INT PRIMARY KEY UNIQUE,
    nombre VARCHAR(50) UNIQUE,
    apellido VARCHAR(50) UNIQUE,
    direccion VARCHAR(255),
    fechanacimiento VARCHAR(11)
);