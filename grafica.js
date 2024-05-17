// Algoritmo de lectura de disco SSTF
// Autores: Ximena Bedoya, Juan Camilo López

let grafica = null;

// Función para realizar la gráfica
function graficar(canvas, lista_1, lista_2) {
    let ctx = canvas.getContext('2d');

    // Destruir la gráfica anterior
    if (grafica) {
        grafica.destroy();
    }

    // Crear la nueva gráfica
    grafica = new Chart(ctx, {
        type: 'scatter',
        data: {
        datasets: [{
            data: lista_1.map((valor, indice) => ({x: valor, y: lista_2[indice]})),
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            showLine: true
        }]
        },
        options: {
        scales: {
            x: {
            type: 'linear',
            position: 'top',
            ticks: {
                stepSize: 2
            }
            },
            y: {
            display: false
            }
        },
        plugins: {
            legend: {
            display: false
            }
        }
        }
    });
}