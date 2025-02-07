
const productos = [ 
    {nombre: "Arroz", precio: 30},
    {nombre: 'Leche', precio: 25},
    {nombre: 'Carne', precio: 100},
    {nombre: 'Huevos', precio: 10},
    {nombre: 'Frijoles', precio: 15},
    {nombre: 'Queso', precio: 55}
]

let productoConImpuesto = [];

const aplicarimpuestos = (productos) => { 

    productos.forEach(producto => {
        if(producto.precio > 50 ) {
            producto.precio = producto.precio * 1.10;
            productoConImpuesto.push(producto);
        }
    });
    console.log(productoConImpuesto);
}

aplicarimpuestos(productos)
