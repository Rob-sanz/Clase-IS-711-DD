const ventas =  [
    {producto : 'TV' , monto : 1000},
    {producto: 'Radio', monto: 500},
]

let totalVentas = 0
let promedioVentas = 0
let transacciones = 0

generarReporte = (ventas) => {

    ventas.forEach(producto => {
        totalVentas = totalVentas + producto.monto
        promedioVentas = totalVentas / ventas.length
        transacciones = ventas.length
    });
    
    reporte = {
        totalVentas: totalVentas,
        promedioVentas: promedioVentas,
        transacciones: transacciones
    }
    return reporte
}

console.log(generarReporte(ventas))