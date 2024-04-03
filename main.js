const productos = [
    {
        id: "Abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Abrigo1",
            id: "Abrigo1"
        },
        precio: 1000
    },
    {
        id: "Abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Abrigo2",
            id: "Abrigo2"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./images/Elemento1/Elemento1-1.webp",
        categoria: {
            nombre: "Abrigo3",
            id: "Abrigo3"
        },
        precio: 1000
    },
    {
        id: "pantalones-01",
        titulo: "Pantalones 01",
        imagen: "./images/Elemento2/Elemento2-1.webp",
        categoria: {
            nombre: "Pantalones1",
            id: "Pantalones1"
        },
        precio: 2000
    },
    {
        id: "pantalones-02",
        titulo: "Pantalones 02",
        imagen: "./images/Elemento2/Elemento2-1.webp",
        categoria: {
            nombre: "Pantalones2",
            id: "Pantalones2"
        },
        precio: 2000
    },
    {
        id: "pantalones-03",
        titulo: "Pantalones 03",
        imagen: "./images/Elemento2/Elemento2-1.webp",
        categoria: {
            nombre: "Pantalones3",
            id: "Pantalones3"
        },
        precio: 2000
    },
    {
        id: "zapatillas-01",
        titulo: "Zapatillas 01",
        imagen: "./images/Elemento3/Elemento3-1.webp",
        categoria: {
            nombre: "Zapatillas1",
            id: "Zapatillas1"
        },
        precio: 3000
    },
    {
        id: "zapatillas-02",
        titulo: "Zapatillas 02",
        imagen: "./images/Elemento3/Elemento3-1.webp",
        categoria: {
            nombre: "Zapatillas2",
            id: "Zapatillas2"
        },
        precio: 3000
    },
    {
        id: "zapatillas-03",
        titulo: "Zapatillas 03",
        imagen: "./images/Elemento3/Elemento3-1.webp",
        categoria: {
            nombre: "Zapatillas3",
            id: "Zapatillas3"
        },
        precio: 3000
    },
]
const contenedorProductos = document.getElementById("contenedor-productos");

function cargarProductos() {
    productos.forEach(producto => {
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

}
cargarProductos();


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