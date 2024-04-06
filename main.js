const productos = [
    {
        id: "Abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "Abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "Abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "Abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "pantalones-01",
        titulo: "Pantalones 01",
        imagen: "./images/Elemento2/Elemento2-1.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 2000
    },
    {
        id: "pantalones-02",
        titulo: "Pantalones 02",
        imagen: "./images/Elemento2/Elemento2-1.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 2000
    },
    {
        id: "pantalones-03",
        titulo: "Pantalones 03",
        imagen: "./images/Elemento2/Elemento2-1.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 2000
    },
    {
        id: "pantalones-01",
        titulo: "Pantalones 01",
        imagen: "./images/Elemento2/Elemento2-1.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 2000
    },
    {
        id: "pantalones-02",
        titulo: "Pantalones 02",
        imagen: "./images/Elemento2/Elemento2-1.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 2000
    },
    {
        id: "pantalones-03",
        titulo: "Pantalones 03",
        imagen: "./images/Elemento2/Elemento2-1.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 2000
    },
    {
        id: "zapatillas-01",
        titulo: "Zapatillas 01",
        imagen: "./images/Elemento3/Elemento3-1.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 3000
    },
    {
        id: "zapatillas-02",
        titulo: "Zapatillas 02",
        imagen: "./images/Elemento3/Elemento3-1.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 3000
    },
    {
        id: "zapatillas-03",
        titulo: "Zapatillas 03",
        imagen: "./images/Elemento3/Elemento3-1.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 3000
    },
    {
        id: "zapatillas-01",
        titulo: "Zapatillas 01",
        imagen: "./images/Elemento3/Elemento3-1.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 3000
    },
    {
        id: "zapatillas-02",
        titulo: "Zapatillas 02",
        imagen: "./images/Elemento3/Elemento3-1.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 3000
    },
    {
        id: "zapatillas-03",
        titulo: "Zapatillas 03",
        imagen: "./images/Elemento3/Elemento3-1.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 3000
    },
    {
        id: "Otros-01",
        titulo: "Otros 01",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Otros",
            id: "otros"
        },
        precio: 2000
    },
    {
        id: "Otros-01",
        titulo: "Otros 01",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Otros",
            id: "otros"
        },
        precio: 2000
    },
    {
        id: "Otros-01",
        titulo: "Otros 01",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Otros",
            id: "otros"
        },
        precio: 2000
    },
]
const contenedorProductos = document.getElementById("contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".boton-agregar");
const numerito = document.querySelector("#numerito")
const numeritoTop = document.querySelector("#numeritoTop")

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("elemento");
        div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <h1>${producto.titulo}</h1>
                <h2>Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim numquam cumque itaque ratione quisquam corrupti molestiae aperiam qui aut quos.</h2>
                <div class="precio_producto">
                    <div class="precio">
                        <h1>Precio</h1>
                        <h2>${producto.precio}</h2>
                    </div>
                    <div class="agregar">
                       <button class="agregar-producto" id = "${producto.id}">Agregar al carrito</button>
                    </div>
                </div>
              `;
              contenedorProductos.append(div);
              


    })
    actualizarBotonesAgregar();

}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            aside.classList.remove("aside-visible");
            aside.classList.add("aside");
            console.log("if")
       
        } 
        // else if (e.currentTarget.id ==="volver"){
        //     aside.classList.remove("aside-visible");
        //     aside.classList.add("aside");
        //     console.log("if2")
        // }
        else {
            cargarProductos(productos)
            tituloPrincipal.innerText = "Todos los productos"
            console.log("else")
        }
        
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".agregar-producto");
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })

}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
    
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++
    }
    else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
    numeritoTop.innerText = nuevoNumerito;
}


/* <div class="elemento">
                <img src="images/logo/logo.webp" alt="">
                <h1>Titulo del producto</h1>
                <h2>Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim numquam cumque itaque ratione quisquam corrupti molestiae aperiam qui aut quos.</h2>
                <div class="precio_producto">
                    <div class="precio">
                        <h1>Precio</h1>
                        <h2>32 €</h2>
                    </div>
                    <div class="agregar">
                       <button class="agregar-producto">Agregar al carrito</button>
                    </div>
                    
                    
                </div>
            </div> */