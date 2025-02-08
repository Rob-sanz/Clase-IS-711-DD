let productos = [
    {id : 1, nombre : 'camisa' , stock : 20},	
    {id : 2, nombre : 'pantalon' , stock : 10},
    {id : 3, nombre : 'calcetines' , stock : 30},
    {id : 4, nombre : 'zapatos' , stock : 5},
    {id : 5, nombre : 'gorra' , stock : 15}
]

actualizarStock = (productos, id , nuevoStock) => {

    productos.forEach(producto => {
        if(producto.id === id){
            producto.stock = nuevoStock;
        }else{
            return null
        } 
        
    });
}

console.log(productos);
actualizarStock(productos, 12, 50);
console.log(productos);
actualizarStock(productos, 2, 50);
console.log(productos);