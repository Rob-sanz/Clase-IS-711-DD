usuarios = [
    {id : 1, nombre : 'Roberto'},
    {id : 2, nombre : 'Juan'},
    {id : 3, nombre : 'Maria'},	
    {id : 4, nombre : 'Pedro'},	
    {id : 5, nombre : 'Ana'}
]

detalles = [
    {id : 1, edad : 22 , ciudad : 'Tela'},
    {id : 2, edad : 25 , ciudad : 'SPS'},
    {id : 3, edad : 30 , ciudad : 'La Ceiba'},
    {id : 4, edad : 35 , ciudad : 'Tegucigalpa'},
    {id : 5, edad : 40 , ciudad : 'San Pedro Sula'}
]

combinarUsiarios = (usuarios, detalles) => {
    let usuariosDetalles = []
    usuarios.forEach(usuario => {
        detalles.forEach(detalle => {
            if(usuario.id === detalle.id){
                usuariosDetalles.push({...usuario, ...detalle})
            }
        })
    })
    return usuariosDetalles
}

console.log(combinarUsiarios(usuarios, detalles))
