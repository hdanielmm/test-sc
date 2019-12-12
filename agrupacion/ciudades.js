// Agrupación
// Teniendo un arreglo en una estructura JSON, según muestra la figura. Calcule y muestre el total por ciudad
// para cada mes

function lee_json() {
  const ventas = {
    medellin: {
      enero: 0,
      febrero: 0,
      marzo: 0
    },
    cali: {
      enero: 0,
      febrero: 0,
      marzo: 0
    }
  }

  $.getJSON("ciudades.json", function (datos) {
    for (const i in datos) {
      switch (datos[i].ciudad) {
        case "Medellin":
          switch (datos[i].mes) {
            case "Enero":
              ventas.medellin.enero += datos[i].venta;
              break;
            case "Febrero":
              ventas.medellin.febrero += datos[i].venta;
              break;
            case "Marzo":
              ventas.medellin.marzo += datos[i].venta;
              break;
            default:
              break;
          }
          break;
        case "Cali":
          switch (datos[i].mes) {
            case "Enero":
              ventas.cali.enero += datos[i].venta;
              break;
            case "Febrero":
              ventas.cali.febrero += datos[i].venta;
              break;
            case "Marzo":
              ventas.cali.marzo += datos[i].venta;
              break;
            default:
              break;
          }
        default:
          break;
      }
    }

    $("body").append(`<div>Resultado de las ventas: ${JSON.stringify(ventas)}</div>`);
  });
}