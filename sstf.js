// Algoritmo de lectura de disco SSTF
// Autores: Ximena Bedoya, Juan Camilo López


// Función de SSTF
function sstf(si){
    // sector actual
    let sa = si[0]
    // Secuencia final
    let sf = []
    sf.push(sa)
    si.shift()
    let sector_siguiente = si[0];
    let distancia = Math.abs(sa - si[0]);
    while (si.length > 0) {
        // Encotrar sector más cercano
        for (const sector of si){
            let diferencia = Math.abs(sa - sector)
            if (diferencia < distancia){
                distancia = diferencia
                sector_siguiente = sector
            }
        }
        // Actualizar sector actual
        sa = sector_siguiente
        // Agregar sector a la secuencia final
        sf.push(sector_siguiente)
        // Eliminar sector de la secuencia inicial
        let index = si.indexOf(sector_siguiente)
        si.splice(index, 1)
        // Actualizar distancia
        sector_siguiente = si[0];
        distancia = Math.abs(sa - sector_siguiente);
    }
    return sf
}