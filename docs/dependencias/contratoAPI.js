// POST /login

request:
payload: {
    email: String,
        password: String,
    }
response: {
    token: String,
        user: {
        id: int,
            email: String,
    }
}

// POST /register

request:
payload: {
    nombre: String,
        email: String,
            password: String,
                repeatPassword: String,
    }

response: {
    statusCode: code,
}


// POST /user_id/carrito

request:
payload: {
    id_producto: String,
        cantidad: int,
    }
response: {
    statusCode: code,
}

// GET /user_id/carrito

request:
payload: {

}

response: {
    statusCode: code,
        carrito: [
            {
                id_producto: String,
                nombre_producto: String,
                descripcion: String,
                imagen: String,
                precio: decimal,
                cantidad: int
            },
            ...
        ]
}