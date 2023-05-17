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
