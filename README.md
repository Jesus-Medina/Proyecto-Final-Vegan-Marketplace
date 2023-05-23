## Frontend
```bash
cd frontend
npm install
npm start
```

## Backend
Crear base de datos en Postgres
```sql
CREATE DATABASE marketplace;
```

Crear tabla usuario
```sql
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255)
);
```

Crear tabla producto
```sql
CREATE TABLE producto (
    id SERIAL PRIMARY KEY,
    id_vendedor INT REFERENCES usuario(id),
    nombre VARCHAR(255),
    descripcion TEXT,
    url_imagen VARCHAR(512),
    precio INT,
    stock INT,
    categoria VARCHAR(255)
);
```

Crear tabla favoritos
```sql
CREATE TABLE favoritos (
    id SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuario(id),
    id_producto INT REFERENCES producto(id)
);
```

Finalmente
```bash
cd backend
npm install
node index.js
```

Para tests de backend insertamos un usuario de prueba
```sql
INSERT INTO usuario ("nombre","email","password_hash") 
VALUES ('test user', 'test@email.com', '$2a$10$L05eG03tuwc0tkq4zKslq.u9SsR1y7LV.WSvEiXW6NgWhAZ4E4a72');
```