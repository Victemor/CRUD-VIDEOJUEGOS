function adicionar() {
    event.preventDefault();

    const jugador = {
        nombre: document.getElementById("NombreVideojuego").value,
        precio: document.getElementById("PrecioVideojuego").value,
        plataforma: document.getElementById("PlataformaVideojuego").value,
        categoria: document.getElementById("CategoriaVideojuego").value,
        editor: document.getElementById("EditorVideojuego").value
    };

    fetch("https://api.ejemplo.com/jugadores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jugador)
    })
    .then(response => response.json())
    .then(data => {
        alert("Videojuego guardado correctamente.");
        console.log(data);
    })
    .catch(error => {
        console.error("Error al guardar:", error);
        alert("Ocurrió un error al guardar.");
    });
}

function buscar() {
    event.preventDefault();

    const nombre = document.getElementById("NombreVideojuegoB").value;

    fetch(`https://api.ejemplo.com/jugadores?nombre=${encodeURIComponent(nombre)}`)
    .then(response => response.json())
    .then(data => {
        if (data) {
            alert(`Videojuego encontrado:\nNombre: ${data.nombre}\nPrecio: ${data.precio}\nPlataforma: ${data.plataforma}`);
            console.log(data);
        } else {
            alert("Videojuego no encontrado.");
        }
    })
    .catch(error => {
        console.error("Error en la búsqueda:", error);
        alert("Ocurrió un error al buscar.");
    });
}

function ingresar() {
    event.preventDefault();

    const usuario = document.getElementById("Usuario").value;
    const contraseña = document.getElementById("Contraseña").value;

    fetch("https://api.ejemplo.com/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario, contraseña })
    })
    .then(response => response.json())
    .then(data => {
        if (data.autenticado) {
            alert("Inicio de sesión exitoso.");
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    })
    .catch(error => {
        console.error("Error en el login:", error);
        alert("Ocurrió un error al iniciar sesión.");
    });
}

function registro() {
    event.preventDefault();

    const usuario = document.getElementById("UsuarioRegistro").value;
    const contraseña = document.getElementById("ContraseñaRegistro").value;

    fetch("https://api.ejemplo.com/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario, contraseña })
    })
    .then(response => response.json())
    .then(data => {
        alert("Usuario registrado con éxito.");
        console.log(data);
    })
    .catch(error => {
        console.error("Error en el registro:", error);
        alert("Ocurrió un error al registrar.");
    });
}
