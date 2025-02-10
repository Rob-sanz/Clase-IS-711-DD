const elementos = [1, 2, 1, 2, 3, 3, 'Hola', 'Adios', 'Hola']

contarOcurrencias = () => {

    let ocurrencias = {}

    elementos.forEach(elemento => {
        if (ocurrencias[elemento]) {
            ocurrencias[elemento]++
        } else {
            ocurrencias[elemento] = 1
        }
    });

    return ocurrencias
}

console.log	(contarOcurrencias(elementos))
