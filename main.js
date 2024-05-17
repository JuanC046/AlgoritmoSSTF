// Algoritmo de lectura de disco SSTF
// Autores: Ximena Bedoya, Juan Camilo López

// Función para generar números sucesivos de acuerdo a los elementos de una lista
function numeros_sucesivos(lista) {
    return lista.map((_, indice) => lista.length - indice)
}

// Función principal
function main() {
    let input_lista = document.getElementById('input_lista').value;
    // Convertir la cadena de texto en un arreglo de números
    let si = input_lista.split(',').map(Number);
    console.log(`Secuencia Inicial: ${si}`)
    let sf = sstf(si)
    console.log(`Secuencia Final ${sf}`)
    let texto_sectores = document.getElementById('texto_sectores')
    texto_sectores.textContent = 'Sectores'
    let canvas = document.getElementById('grafica');
    graficar(canvas, sf, numeros_sucesivos(sf))
    let texto_sf = document.getElementById('texto_sf')
    texto_sf.textContent = 'Secuencia Final: ' + sf
}